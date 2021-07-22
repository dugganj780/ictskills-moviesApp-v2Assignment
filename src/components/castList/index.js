import React from "react";
import CastItem from "../castItem";
import List from "@material-ui/core/List";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const CastList = ( {castMembers}) => {
  let castList = castMembers.map((m) => (
  <>
<List >
  <CastItem castMember={m} />
<Divider variant="inset" component="li" />
</List>
    </>
  ));
  return castList;
};

export default CastList;