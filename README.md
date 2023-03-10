meet-up

화면에 출력되는 내용을 변경하려면 useState를 사용하면 되지만
입력 및 값을 읽을 때는 ref가 더 유용하게 쓰입니다

Firebase의 실시간 데이터베이스 서버에서는

이 URL을 조작할 수 있습니다

도메인 다음 부분에 세그먼트를 추가할 수 있는데

그 세그먼트가 폴더로 변환됩니다

즉 데이터베이스에서 테이블로 변환되는 겁니다

따라서 이 URL 다음에 /meetups를 붙여 요청을 보내면

meetups 테이블 혹은 컬렉션을 데이터베이스에 추가하게 되지요

응답으로 변환될 프로미스를 반환하는 거죠
      그 응답으로부터는 본문(Body), 즉 데이터를 읽어야 하는데
      이때는 json 메서드를 사용합니다
      이 response 객체에서 바로 사용이 가능한 메서드이며
      이 메서드를 통해 JSON으로부터 JavaScript 객체로 자동으로 변환된
      데이터로 액세스를 할 수 있습니다 하지만 여기서 주의하셔야 할 게
      json 또한 프로미스를 반환하기 때문에
      이 프로미스가 리졸브(Resolve)될 때까지 대기해야 합니다
      따라서 여기에서 return response.json();을 한 후
      then 블록을 하나 더 추가해 실제 데이터를 받겠습니다
      그러면 이 두 번째 then 블록에서 데이터를 다룰 수 있게 되죠

useState를 사용할 때에는 React가 상태 업데이트를

즉각적으로 처리하는 것이 아니라 내부에서 일정을 정합니다

아주 빠르게 처리하는 편이긴 하지만 반드시 즉각적인 건 아니죠

따라서 상태를 업데이트하고 있고

상태 업데이트가 최신 상태 스냅샷에 따라 달라지는 경우에는

상태 스냅샷이 최진 상태를 제대로 반영하지 않을

상황이 발생할 수 있습니다

마지막 상태 업데이트가 아직 처리되지 않았기 때문이죠

이런 경우로 인해 마지막 상태 스냅샷에

영향을 받는 경우에 상태 업데이트 함수를 호출하기 위한

다른 형식이 존재합니다

제가 방금 했던 것과 같이 새 값을 전달하는 것이 아니라

상태 업데이트 함수에 함수를 전달하는 것이죠

그러면 React가 이 함수를 실행해 줍니다
