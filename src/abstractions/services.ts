import { AppConfiguration } from ".";
import { AxiosStatic } from "axios";
import { AppConfigurationRenderer } from "./app-configuration-renderer";
import { AppSessionStateAccessor, AppSessionStateMonitor } from "./app-session";
import { DopplerLegacyClient } from "./doppler-legacy-client";
import { HtmlEditorApiClient } from "./html-editor-api-client";
import { DopplerRestApiClient } from "./doppler-rest-api-client";

// TODO: Determine if defining this type based on a list of types possible,
// for example based on this type:
// type AppServicesTuple = [ Window, AppConfiguration ]
export type AppServices = {
  window: Window;
  axiosStatic: AxiosStatic;
  appConfiguration: AppConfiguration;
  appConfigurationRenderer: AppConfigurationRenderer;
  dopplerLegacyClient: DopplerLegacyClient;
  htmlEditorApiClient: HtmlEditorApiClient;
  dopplerRestApiClient: DopplerRestApiClient;
  appSessionStateAccessor: AppSessionStateAccessor;
  appSessionStateMonitor: AppSessionStateMonitor;
};
