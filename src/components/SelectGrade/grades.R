gradesBA=c("一","二","三","四")
gradesMA=c("一","二")
paste0(
    "經",rep(gradesBA,each=2), c("A","B")
) |>
jsonlite::toJSON() 