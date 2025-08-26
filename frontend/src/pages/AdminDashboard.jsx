import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  VStack,
  Button,
  Icon,
  Grid,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import { FaChartLine, FaBriefcase } from "react-icons/fa";
import { MdGroup, MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";

import JobInfo from "../components/AdminDashboard/JobInfoPanel";
import ContactUsInfo from "../components/AdminDashboard/ContactUsPanel";
import TeamPhoto from "../components/AdminDashboard/TeamPhotoPanel";
import Photos from "../components/AdminDashboard/Photos";
import AdminCreatePanel from "../components/AdminDashboard/AdminCreatePanel";
import JobsDesp from "../components/AdminDashboard/JobsDesp";
import Logout from "../components/AdminDashboard/Logout";

const mockLineData = [
  { name: "Mo", value: 120 },
  { name: "Tu", value: 210 },
  { name: "We", value: 150 },
  { name: "Th", value: 300 },
  { name: "Fr", value: 270 },
  { name: "Sa", value: 200 },
  { name: "Su", value: 180 },
];

const demoStats = [
  { label: "Total Visits", value: "1,245", icon: FaChartLine, color: "blue.500" },
  { label: "Active Users", value: "512", icon: TbUsersGroup, color: "teal.500" },
  { label: "Jobs Posted", value: "36", icon: FaBriefcase, color: "orange.400" },
  { label: "Admins", value: "4", icon: MdOutlineAdminPanelSettings, color: "purple.500" },
];

const navItems = [
  { key: "home", label: "Dashboard", icon: FaChartLine },
  { key: "createadmin", label: "Create Admin", icon: MdOutlineAdminPanelSettings },
  { key: "jobinfo", label: "Job Info", icon: MdGroup },
  { key: "contact", label: "Contact Us", icon: IoMdContact },
  { key: "upload", label: "Team Photo", icon: MdGroup },
  { key: "photos", label: "Photos", icon: TbUsersGroup },
  { key: "jobsdesp", label: "Jobs Description", icon: FaBriefcase },
];

const AdminDashboard = () => {
  const [activeView, setActiveView] = React.useState("home");
  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      // Redirect or toast to login
      toast({
        title: "Authentication required",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      // Logic to redirect can be added here
    }
  }, [toast]);

  const renderContent = () => {
    switch (activeView) {
      case "jobinfo":
        return <JobInfo />;
      case "contact":
        return <ContactUsInfo />;
      case "upload":
        return <TeamPhoto />;
      case "photos":
        return <Photos />;
      case "jobsdesp":
        return <JobsDesp />;
      case "createadmin":
        return <AdminCreatePanel />;
      default:
        return (
          <>
            <Text fontSize="3xl" fontWeight="bold" mb={8} color="gray.700">
              Dashboard Overview
            </Text>

            {/* Line Chart Section */}
            <Box
              bg="white"
              p={6}
              borderRadius="xl"
              boxShadow="md"
              mb={8}
              minH="280px"
            >
              <Text fontSize="md" mb={4} color="gray.600">
                Weekly Visits
              </Text>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={mockLineData} margin={{ top: 10, right: 30 }}>
                  <XAxis dataKey="name" stroke="#718096" />
                  <YAxis stroke="#718096" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#3182ce" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Box>

            {/* Demo Statistics */}
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
              {demoStats.map(({ label, value, icon, color }) => (
                <Box
                  key={label}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="md"
                  p={6}
                  textAlign="center"
                >
                  <Icon as={icon} w={8} h={8} color={color} mb={2} />
                  <Text fontWeight="bold" fontSize="lg" color="gray.700">
                    {value}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </>
        );
    }
  };

  return (
    <Flex minH="100vh" bg="white" color="gray.800">
      {/* Sidebar */}
      <Box
        w={{ base: "64px", md: "220px" }}
        bg="gray.50"
        borderRight="1px solid #E2E8F0"
        p={4}
        pt={6}
        boxShadow="sm"
        position="sticky"
        top="0"
        h="100vh"
      >
        <VStack spacing={4} align="stretch">
          <Text
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            color="teal.600"
            display={{ base: "none", md: "block" }}
            mb={4}
          >
            Admin Panel
          </Text>

          {navItems.map(({ key, label, icon }) => (
            <Button
              key={key}
              leftIcon={<Icon as={icon} boxSize={5} />}
              onClick={() => setActiveView(key)}
              justifyContent="flex-start"
              variant={activeView === key ? "solid" : "ghost"}
              colorScheme={activeView === key ? "teal" : "gray"}
              fontWeight={activeView === key ? "bold" : "normal"}
              _hover={{ bg: "teal.50" }}
              size="md"
              px={3}
            >
              <Text display={{ base: "none", md: "block" }}>{label}</Text>
            </Button>
          ))}

          {/* Logout */}
          <Logout />
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={6} overflowY="auto">
        {renderContent()}
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
