# demo-fileupload-vue

> A Vue.js project

## Devendency Modules

* [axios](https://github.com/axios/axios)
* [Vutify](https://vuetifyjs.com/ja/)
* [material-design-icons-iconfont](https://github.com/jossef/material-design-icons-iconfont)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Cloud Functions for Firebase

### helloWorld

``` text
curl -v "https://us-central1-{PROJECT-ID}.cloudfunctions.net/helloWorld"
```

### addMemo

``` text
curl -v -X POST -H "Content-Type:application/json" "https://us-central1-{PROJECT-ID}.cloudfunctions.net/addMemo" -d @new_memo.json
```

``` json
{
  "title": "test title",
  "description": "test description",
  "platforms": ["A", "B"],
  "million": false,
  "releasedAt": "2018-05-01"
}
```

### fileupload

``` text
curl -v -X POST "https://us-central1-{PROJECT-ID}.cloudfunctions.net/fileupload" -F "file=@logo.png;type=image/png"
```

``` text
curl -v -X POST "https://us-central1-{PROJECT-ID}.cloudfunctions.net/fileupload" -F "file1=@test1.jpg;type=image/jpg" -F "file2=@test2.png;type=image/png"
```

### filedownload

``` text
curl -v "https://us-central1-{PROJECT-ID}.cloudfunctions.net/filedownload?file={file_name}"
```

## Firebase Hosting

``` text
https://{PROJECT-ID}.firebaseapp.com
```

### rewrites

#### /hello

Functions: helloWorld

``` text
curl -v "https://{PROJECT-ID}.firebaseapp.com/hello"
```

#### /upload

Functions: fileupload

``` text
curl -v -X POST "https://{PROJECT-ID}.firebaseapp.com/upload" -F "file=@logo.png;type=image/png"
```

#### /download

``` text
curl -v "https://{PROJECT-ID}.firebaseapp.com/download?file={file_name}"
```

## mermaid demo

[mermaid.js](https://mermaidjs.github.io/)

``` mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
```
