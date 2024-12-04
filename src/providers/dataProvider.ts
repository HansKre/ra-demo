import jsonRestProvider from "ra-data-fakerest";
import mockData from "./mockData";

// logs requests and responses to browser-console
const loggingEnabled = true;
const mockDataProvider = jsonRestProvider(mockData, loggingEnabled);

export const dataProvider = mockDataProvider;
