import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import { CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width='250px' borderRadius={10} overflow={"hidden"}>
      <Skeleton height='200px'> </Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
