import { Box, Flex, Stack, Heading, Text, Image } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import heartrate from "../../assets/heartrate.png";
import bloodpressure from "../../assets/bloodpressure.png";
import glucoselevel from "../../assets/glucoselevel.png";
import weight from "../../assets/weight.jpg";
import height from "../../assets/height.jpg";
import doc1 from "../../assets/doc1.png";
import doc2 from "../../assets/doc2.png";
import doc3 from "../../assets/doc3.png";

const data = [
  {
    name: "Start",
    steps: 4000,
    cal: 2900,
    amt: 2400,
  },
  {
    name: "Mon",
    steps: 3000,
    cal: 2598,
    amt: 2210,
  },
  {
    name: "Tue",
    steps: 2000,
    cal: 2000,
    amt: 2290,
  },
  {
    name: "Wed",
    steps: 2780,
    cal: 2208,
    amt: 2000,
  },
  {
    name: "Thu",
    steps: 6090,
    cal: 3000,
    amt: 2181,
  },
  {
    name: "Fri",
    steps: 6290,
    cal: 3300,
    amt: 2500,
  },
  {
    name: "Sat",
    steps: 6490,
    cal: 4000,
    amt: 2100,
  },
  {
    name: "Sun",
    steps: 7490,
    cal: 5300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <Stack padding="20px">
      <Stack direction={["row"]} justify="space-between">
        <Flex gap="2" direction={["column"]} paddingBottom="20px">
          <Heading as="h1" fontSize="3xl" color="black">
            Hi, Lashmine
          </Heading>
          <Text>Monday, Lagos City</Text>
          <Text>11, November, 2024</Text>
        </Flex>

        <Flex
          gap="6"
          direction={["row"]}
          padding="10px"
          borderRadius="20px"
          bg="gray.300"
          alignItems="center"
        >
          <Text bg="green.200" padding="10px" borderRadius="10px">
            DAY
          </Text>
          <Text>WEEK</Text>
          <Text>MONTH</Text>
          <Text>YEAR</Text>
        </Flex>
      </Stack>
      <Stack
        direction={["column"]}
        padding="20px"
        bg="white"
        borderRadius="20px"
        boxShadow="lg"
        marginTop="10px"
      >
        <Heading as="h2" fontSize="3xl">
          Health Statistics
        </Heading>
        <Stack>
          <Flex direction="row" paddingBottom="20px" justify="space-between">
            <Heading as="h5" color="Black">
              Activity
            </Heading>
            <Text>Weekly</Text>
          </Flex>
          <Box
            h={["150px", "200px", "250px"]}
            w={["80%", "80%", "80%"]}
            bg="blue.100"
            marginLeft="auto"
            marginRight="auto"
            borderRadius="10px"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="cal"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="steps" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Stack>
        <Flex
          borderRadius="20px"
          align="center"
          direction={["column", "row", "row"]}
          justify="space-evenly"
          gap="20px"
          padding="20px"
        >
          <Stack
            spaceY="3"
            padding="20px"
            bg="gray.300"
            h="200px"
            w={["250px", "180px", "230px"]}
            borderRadius="20px"
          >
            <Image
              height="50px"
              width="50px"
              borderRadius="10px"
              src={height}
            />
            <Heading bg="inherit" as="h3" fontSize="2xl">
              Height
            </Heading>
            <Text bg="inherit">170cm</Text>
          </Stack>
          <Stack
            spaceY="3"
            padding="20px"
            bg="cyan.300"
            h="200px"
            w={["250px", "180px", "230px"]}
            borderRadius="20px"
          >
            <Image
              height="50px"
              width="50px"
              borderRadius="10px"
              src={bloodpressure}
            />
            <Heading bg="inherit" as="h3" fontSize="2xl">
              Blood Pressure
            </Heading>
            <Text bg="inherit">120/80 mmHG</Text>
          </Stack>
          <Stack
            spaceY="3"
            padding="20px"
            bg="red.300"
            h="200px"
            w={["250px", "180px", "230px"]}
            borderRadius="20px"
          >
            <Image
              height="50px"
              width="50px"
              borderRadius="10px"
              src={heartrate}
            />
            <Heading bg="inherit" as="h3" fontSize="2xl">
              Heart Rate
            </Heading>
            <Text bg="inherit">80 BPM</Text>
          </Stack>

          <Stack
            spaceY="3"
            padding="20px"
            bg="green.300"
            h="200px"
            w={["250px", "180px", "230px"]}
            borderRadius="20px"
          >
            <Image
              height="50px"
              width="50px"
              borderRadius="10px"
              src={weight}
            />
            <Heading bg="inherit" as="h3" fontSize="2xl">
              Weight
            </Heading>
            <Text bg="inherit">78kg</Text>
          </Stack>
          <Stack
            spaceY="3"
            padding="20px"
            bg="purple.300"
            h="200px"
            w={["250px", "180px", "230px"]}
            borderRadius="20px"
          >
            <Image
              height="50px"
              width="50px"
              borderRadius="10px"
              src={glucoselevel}
            />
            <Heading bg="inherit" as="h3" fontSize="2xl">
              Glucose Level
            </Heading>
            <Text bg="inherit">60 - 80 mg/cl</Text>
          </Stack>
        </Flex>

        <Flex
          direction={["column", "row", "row"]}
          justify="space-around"
          gap="20px"
          marginTop="9"
        >
          <Stack
            padding="4"
            spaceY="6"
            h="200px"
            w={["270px", "300px", "400px"]}
            bg="white"
            borderRadius="20px"
            marginLeft="auto"
            marginRight="auto"
          >
            <Flex bg="inherit" justify="space-between">
              <Heading bg="inherit" fontSize="3xl">
                Doctors
              </Heading>
              <Text bg="inherit" color="blue.400" cursor="pointer">
                See more +
              </Text>
            </Flex>
            <Flex
              h="100px"
              padding="10px"
              gap="20px"
              justify="space-evenly"
              bg="inherit"
              overflow="hidden"
            >
              <Flex direction="column" align="center">
                <Image
                  height={["50px", "60px", "60px"]}
                  w={["50px", "60px", "60px"]}
                  borderRadius="50%"
                  bg="green"
                  src={doc1}
                />
                <Text>Grace</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image
                  height={["50px", "60px", "60px"]}
                  w={["50px", "60px", "60px"]}
                  borderRadius="50%"
                  bg="green.300"
                  src={doc2}
                />
                <Text>Taiwo</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image
                  height={["50px", "60px", "60px"]}
                  w={["50px", "60px", "60px"]}
                  borderRadius="50%"
                  bg="cyan.300"
                  src={doc3}
                />
                <Text>Pelumi</Text>
              </Flex>
            </Flex>
          </Stack>
          <Stack
            padding="4"
            spaceY="6"
            h="200px"
            w={["270px", "300px", "400px"]}
            bg="white"
            borderRadius="20px"
            marginLeft="auto"
            marginRight="auto"
          >
            <Flex bg="inherit" justify="space-between">
              <Heading bg="inherit" fontSize="3xl">
                Details
              </Heading>
              <Text bg="inherit" color="blue.400" cursor="pointer">
                See more +
              </Text>
            </Flex>
            <Flex
              h="100px"
              padding="10px"
              gap="10px"
              justify="space-evenly"
              bg="inherit"
            >
              <Flex direction="column" align="center" gap="10px">
                <Text w={["80px", "auto", "auto"]}>Blood Type</Text>
                <Heading
                  w={["60px", "auto", "auto"]}
                  fontSize={["20px", "3xl", "3xl"]}
                >
                  A+
                </Heading>
              </Flex>
              <Flex direction="column" align="center" gap="10px">
                <Text>Height</Text>
                <Heading
                  w={["70px", "auto", "auto"]}
                  fontSize={["20px", "3xl", "3xl"]}
                >
                  170 CM
                </Heading>
              </Flex>
              <Flex direction="column" align="center" gap="10px">
                <Text>Weight</Text>
                <Heading
                  w={["60px", "auto", "auto"]}
                  fontSize={["20px", "3xl", "3xl"]}
                >
                  70 KG
                </Heading>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
