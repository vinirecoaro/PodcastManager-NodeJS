# Podcast manager

### Description
An app like netflix, where we can centralize different kinds of podcasts delimited by category

### Domain
Video podcasts

### Features
- List podcasts episodes within caterogries sessions
    - Healthy, Fitness, mindset, humor
- Filter episodes by podcast name

### How

#### Feature:
List podcasts episodes within caterogries sessions

### How to implement:
Will return within an Rest API (json) the podcast name, episode name, video link, cover image and category

```js
{
    podcastName: "flow",
    episode: "Ramon DINO foi supreendido e PERDEU O TÍTULO",
    videoid: "CUdQTF-yueg",
    cover: "https://i.ytimg.com/vi/CUdQTF-yueg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=CUdQTF-yueg",
    categorias: ["healthy", "bodybuilder", "sport"]
},
{
    podcastName: "flow",
    episode: "GUTO GALAMBA - Flow #366",
    videoid: "ymJ0K76DeU4",
    cover: "https://i.ytimg.com/vi/ymJ0K76DeU4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=ymJ0K76DeU4",
    categorias: ["healthy", "bodybuilder"]
}
```


