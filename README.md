# Yarn berry 패키지 매니저 사용하여 vite react typescript 사용

## 왜 yarn berry를 사용하는 것일까?

- Plug'n'Play (PnP)
  - Yarn Berry는 Plug'n'Play 기능을 도입하여 의존성을 더 효율적으로 관리합니다. 이로써 node_modules 폴더가 더 이상 필요하지 않으며, 디스크 공간을 절약할 수 있습니다.
- Zero-installs
  - Yarn Berry는 zero-installs를 지원하여 프로젝트의 의존성을 전역으로 설치하지 않고도 사용할 수 있습니다. 이것은 빠른 시작과 업데이트를 가능하게 합니다.
- 성능 향상
  - Yarn Berry는 이전 버전에 비해 훨씬 빠르고 효율적인 성능을 제공합니다.

## yarn berry 사용방법

`Vite 프로젝트 생성`

```js
- yarn create vite {project name} --template react-ts
또는
- yarn create vite
```

`Yarn Berry Setting`

```js
- yarn seet version berry
- 위 코드를 입력하게되면 .yarn파일과 .yarnrc.yml 파일이 생성된것을 확인할 수 있다.
```

`yarnrc.yml파일 수정`

```js
yarnPath: .yarn/releases/yarn-4.1.1.cjs
//추가
nodeLinker: pnp
pnpMode: loose

-  pnpMode는 PnP 모드의 동작 방식을 설정합니다. 보통 loose 또는 strict 값을 갖습니다.
* `loose`: 특정 패키지가 자체 의존성을 가지고 있을 때 PnP 해결을 느슨하게 합니다. 이 모드에서는 PnP가 충돌이 발생할 때 의존성 해결에 대한 일부 유연성을 제공합니다.
* `strict`: PnP 모드를 엄격하게 유지하여 의존성 충돌이 발생하지 않도록 합니다. 이 모드에서는 의존성 충돌이 발생하면 엄격하게 처리하여 해결할 수 없는 상황에 대해 오류를 발생시킵니다.
```

`Yarn Install 의존성 설치`

```js
- yarn install or yarn
```

`Zero-Install를 위한 .gitignore 파일 수정`

```js
https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored

.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

`typescript 에러`

```js
- yarn dlx @yarnpkg/sdks vscode
- Ctrl + Shift + P
- Select Typescript Version
- Use Workspace Version 클릭 //나오지 않을 경우 [code .]  확인 후 새로시작
```

## jest 설치 후 Test

- 문제 발생 react-router-dom 및 Link 사용 시 test 오류 발생
- eact-router-dom은 이를 위해 MemoryRouter라는, 브라우저 환경과 같이 외부 소스에 연결되지 않은 라우터를 제공하며, 이는 테스트와 같이 외부 환경을 완벽히 제어해야 하는 시나리오에서 이상적이라고 한다.
- react-router-dom의 MemoryRouter 컴포넌트로 감싸준 뒤에 렌더링을 시도하면 이 에러에서 회피하여 테스트를 정상적으로 수행할 수 있다.

```js
//예시
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

test("타이틀이 있는가?", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const titleEl = screen.getByRole("heading", { level: 1 });
  expect(titleEl).toBeInTheDocument();
});
```

-> Next Step 모노레포로를 적용해서 여러 프로젝트 생성해서 버전관리 해보기
