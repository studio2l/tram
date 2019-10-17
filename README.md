# tram

tram은 원하는 웹페이지, 폴더 경로 등으로 간편하게 이동하기 위해 tray menu를 생성하는 툴입니다.

## 설치

tram는 node.js 10.16.3 버전을 사용하여 만들어지고 있습니다. `https://nodejs.org/` 에서 node.js를 설치하세요.

그 후 다음처럼 터미널 명령어를 이용하여 tram를 설치할 수 있습니다.

```bash
$ git clone https://github.com/studio2l/tram
$ cd tram
$ npm install
```

추가적으로 개발을 위해 필요한 프로그램을 설치합니다. 일반적으로 루트 권한이 필요합니다.

```bash
# npm i -g yarn
# npm i -g electron-builder
```

## 실행
테스트를 위해 실행합니다.

```bash
$ yarn start
```

## 배포

```bash
$ yarn build
```
이렇게 하면 dist 폴더에 해당 OS에 대한 설치 파일이 생깁니다.