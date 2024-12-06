"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var http = __toESM(require("http"));

// src/repositories/podcasts-repository.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var pathData = import_path.default.join(__dirname, "../repositories/podcast.json");
var repositoryPodcast = (podcastName) => __async(void 0, null, function* () {
  const language = "utf-8";
  const rawData = import_fs.default.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);
  if (podcastName) {
    jsonFile = jsonFile.filter((podcast) => {
      console.log(podcast.podcastName + " - " + podcastName);
      return podcast.podcastName === podcastName;
    });
    console.log(jsonFile);
    return jsonFile;
  }
  return jsonFile;
});

// src/services/list-episodes-service.ts
var serviceListEpisodes = () => __async(void 0, null, function* () {
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  const data = yield repositoryPodcast();
  responseFormat = {
    statusCode: data.length !== 0 ? 200 /* OK */ : 204 /* NO_CONTENT */,
    body: data
  };
  return responseFormat;
});

// src/services/filter-episodes-service.ts
var serviceFilterEpisodes = (podcastName) => __async(void 0, null, function* () {
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  const queryString = (podcastName == null ? void 0 : podcastName.split("?p=")[1]) || "";
  const data = yield repositoryPodcast(queryString);
  responseFormat.statusCode = data.length !== 0 ? 200 /* OK */ : 204 /* NO_CONTENT */;
  responseFormat.body = data;
  return responseFormat;
});

// src/controllers/podcasts-controller.ts
var getListEpisodes = (req, res) => __async(void 0, null, function* () {
  const content = yield serviceListEpisodes();
  res.writeHead(content.statusCode, { "content-type": "application/json" /* JSON */ });
  res.write(JSON.stringify(content.body));
  res.end();
});
var getFilterEpisodes = (req, res) => __async(void 0, null, function* () {
  const content = yield serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, { "content-type": "application/json" /* JSON */ });
  res.write(JSON.stringify(content.body));
  res.end();
});

// src/app.ts
var app = (request, response) => __async(void 0, null, function* () {
  var _a;
  const baseUrl = (_a = request.url) == null ? void 0 : _a.split("?")[0];
  console.log(request.headers.host);
  if (request.method === "GET" /* GET */ && baseUrl === "/api/list" /* LIST */) {
    yield getListEpisodes(request, response);
  }
  if (request.method === "GET" /* GET */ && baseUrl === "/api/episode" /* EPISODE */) {
    yield getFilterEpisodes(request, response);
  }
});

// src/server.ts
var server = http.createServer(app);
var port = parseInt(process.env.PORT || "3000", 10);
var host = "0.0.0.0";
server.listen(port, host, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
