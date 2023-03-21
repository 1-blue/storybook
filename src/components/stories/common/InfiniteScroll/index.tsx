import { useCallback, useState } from "react";

// component
import InfiniteScrollContainer from "@src/components/stories/container/InfiniteScrollContainer";

// style
import InfiniteScrollStyled from "./style";

// dummyData
const baseURL = "https://jsonplaceholder.typicode.com/users";
const fetchURL = async (page = 1): Promise<User> => {
  const response = await fetch(`${baseURL}/${page}`);
  return response.json();
};

// type
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface Props {}

/** 2023/03/20 - 무한 스크롤링 테스트용 컴포넌트 ( "InfiniteScrollContainer"를 사용 예시 ) - by 1-blue */
const InfiniteScroll: React.FC<Props> = () => {
  /** 보여줄 데이터들 */
  const [users, setUsers] = useState<User[]>([]);
  /** 더 가져올 수 있는지 여부 */
  const [hasMore, setHasMore] = useState(true);
  /** 현재 페이지 */
  const [page, setPage] = useState(1);

  /** 2023/03/20 - 게시글 더 가져오기 - by 1-blue */
  const fetchMore = useCallback(async () => {
    if (!hasMore) return;

    const user = await fetchURL(page);

    setHasMore(!!user.id);
    if (!user.id) return;

    setPage((prev) => prev + 1);

    setUsers((prev) => [...prev, user]);
  }, [page, hasMore]);

  return (
    <InfiniteScrollContainer fetchMore={fetchMore} hasMore={hasMore}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.2em" }}
      >
        무한 스크롤링 테스트용 컴포넌트
      </h1>
      <h2
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          marginBottom: "1.2em",
        }}
      >
        InfiniteScrollContainer을 감싸주면 쉽게 적용 가능
      </h2>
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "1.2em",
        }}
      >
        로딩처리, prefetching은 react-query를 써보도록 하자...
      </h3>
      <h4
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          marginBottom: "1.2em",
        }}
      >
        기능을 더 구현할 수 있지만, 최소한으로만 구현하고 필요 시 필요한 곳에서
        추가로 구현하는 것이 좋을 것 같음
      </h4>
      <InfiniteScrollStyled>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.id} </h1>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <span>{user.company.name}</span>
            <span>{user.address.city}</span>
            <span>{user.website}</span>
            <span>
              요청 URL:
              <a
                href="https://jsonplaceholder.typicode.com/users"
                target="_blank"
              >
                jsonplaceholder
              </a>
              , 총 10개
            </span>
          </li>
        ))}
      </InfiniteScrollStyled>
    </InfiniteScrollContainer>
  );
};

export default InfiniteScroll;
