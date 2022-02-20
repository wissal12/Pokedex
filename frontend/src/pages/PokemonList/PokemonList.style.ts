import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const PaginationConatiner = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
`;
