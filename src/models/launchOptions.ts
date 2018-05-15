export interface LaunchOptions {
    id               : Boolean
    flight_id        : Number
    order            : String
    start            : Date
    final            : Date
    flight_number    : Number
    launch_year      : Number
    launch_date_utc  : String
    launch_date_local: String
    rocket_id        : Number
    rocket_name      : String
    rocket_type      : String
    core_serial      : String
    cap_serial       : String
    core_flight      : Number
    block            : Number
    core_reuse       : String
    side_core1_reuse : String
    side_core2_reuse : String
    fairings_reuse   : String
    capsule_reuse    : String
    site_id          : Number
    site_name        : String
    site_name_long   : String
    payload_id       : Number
    customer         : String
    payload_type     : String
    orbit            : String
    launch_success   : String
    reused           : String
    land_success     : String
    landing_type     : String
    landing_vehicle  : String
}