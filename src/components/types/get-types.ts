export interface GetAccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
  }
export interface GetAlbumsResponse {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Images[];
    name: string;
    release_date: string;
    release_date_precision: string;
    type: string;
    uri: string;
    artists: Artists[];
    tracks: GetTrackResponse[];
  }
  
  interface ExternalUrls {
    spotify: string;
  }
  
  interface Images {
    height: number;
    url: string;
    width: number;
  }
  
  interface Artists {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface GetCurrentlyPlayingTrack {
    context?: Context;
    timestamp: number;
    progress_ms: number;
    is_playing: boolean;
    item: GetTrackResponse;
    currently_playing_type: string;
    actions: {
      disallows: {
        pausing?: boolean;
        resuming?: boolean;
      };
    };
  }
  
  interface Context {
    type: string;
    href: string;
    external_urls: {
      spotify: string;
    };
    url: string;
  }

  export interface GetTrackResponse {
    album: GetAlbumsResponse;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: External_ids;
    external_urls: External_urls;
    href: string;
    id: string;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  }
  
  interface Artist {
    external_urls: External_urls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }
  
  interface External_urls {
    spotify: string;
  }
  
  interface External_ids {
    isrc: string;
    ean: string;
    upc: string;
  }