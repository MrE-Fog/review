-ifndef(LOCATION_HRL).
-define(LOCATION_HRL, true).

-include_lib("review/include/erp/catalogs/dict.hrl").

-record('Loc',   { id          = [] :: [] | binary(),
                   code        = [] :: [] | term(),
                   country     = [] :: [] | binary(),
                   city        = [] :: [] | binary(),
                   address     = [] :: [] | binary(),
                   type        = [] :: [] | #dict{}}).

-endif.
