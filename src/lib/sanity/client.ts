import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "5pcp0w96",
  dataset: "production",
  apiVersion: "2022-10-14",
  token: 'skCdLyYGAtpmAJZlgrHr1IZVSRRmpyAptJwNamCSgPCqyXeQwBO8xLeDpDeS9T29Vlcdh9RFCV4GvDqiR4haOZGOeVUvgSv0vER17PARkjE0poWK4IQb4VppEQUYQhaoSwMDsiDP9J0EnwoCeDuyiOcBMwHJUV1AQSUvCSnxIYypBr94SeKb',
  useCdn: false // `false` if you want to ensure fresh data
});

export default client;
