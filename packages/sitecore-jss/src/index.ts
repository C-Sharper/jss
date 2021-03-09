import * as dataApi from './dataApi';
import * as mediaApi from './mediaApi';
import * as util from './util';

export { dataApi, mediaApi, util };

export { GraphQLRequestClient } from './graphql-request-client';

export { LayoutServiceRequestOptions } from './dataApi';

export { AxiosDataFetcher, AxiosDataFetcherConfig } from './data-fetcher';

export {
  LayoutService,
  GraphQLLayoutService,
  GraphQLLayoutServiceConfig,
  RestLayoutService,
  RestLayoutServiceConfig,
  DataFetcherResolver,
} from './layout-service';

export {
  DictionaryService,
  RestDictionaryService,
  DictionaryServiceConfig,
} from './dictionary-service';

// Exporting individual functions from util for backwards compatibility with v16 and lower. Should move all samples to using 'util' alias in the future.
const { isExperienceEditorActive, isServer, resetExperienceEditorChromes } = util;
export { isExperienceEditorActive, isServer, resetExperienceEditorChromes };
const { getFieldValue, getChildPlaceholder } = util.layoutData;
export { getFieldValue, getChildPlaceholder };

export {
  DictionaryPhrases,
  DictionaryServiceData,
  LayoutServiceData,
  LayoutServicePageState,
  LayoutServiceContext,
  LayoutServiceContextData,
  RouteData,
  PlaceholderData,
  ComponentRendering,
  HtmlElementRendering,
  Field,
  Item,
  PlaceholdersData,
  ComponentFields,
  ComponentParams,
} from './dataModels';

export { HttpJsonFetcher, HttpResponse } from './httpClientInterface';
