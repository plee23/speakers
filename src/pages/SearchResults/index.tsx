import React, { FC } from "react";
import { useLocation } from "react-router";
import { Container, Row, Col } from "react-grid-system";
import { ITalent, ISearch } from "types";
import { config } from "config";
import SpeakerCard from "components/SpeakerCard";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import { BigText, ArrowLeftText } from "styles/components";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import StarPower from "components/StarPower";

const SearchResults: FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const { data, error, isLoading } = fetchSingle<ISearch<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents/search/multi-match?query=${query}&limit=20`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  return (
    <>
      <div>
        <Container fluid>
          <Row>
            <Col offset={{ lg: 1 }} xs={12} lg={10}>
              <Box padding="40px 0 80px">
                <Link to="/explore">
                  <ArrowLeftText>BACK TO EXPLORE</ArrowLeftText>
                </Link>
                <BigText>Search Results</BigText>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col offset={{ lg: 1 }} lg={10}>
              <Row>
                {data.hits.map((x, i) => (
                  <Col key={`search-result-${i}`} xs={6} md={3}>
                    <SpeakerCard
                      slug={x._source.slug}
                      imageUrl={`${config.imageProxyUrl}${x._source.media.images[0]?.url}`}
                      name={x._source.name}
                      description={x._source.titles[0]}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <StarPower />
    </>
  );
};

export default SearchResults;
