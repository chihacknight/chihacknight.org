---
layout: remote_event
categories:
  - events
links: 
title: "Residential Valuation V2: New Methods, Models, and Results"
description: "The Cook County Assessor’s Office (CCAO) is responsible for determining the assessed value of over 1.8 million properties. This year, the Data Science department created V2 of its residential valuation model. CCAO Senior Data Scientist, Dan Snow, will walk through V2 of the new residential model. He'll cover major modeling choices, what features/data are included, and what adjustments are made to initial model results."
speakers:
 - "Dan Snow, Senior Data Scientist, Cook County Assessor's Office"
image: /images/events/428-assessor.jpg
image_credit:
date: 2021-01-19T19:00:00-06:00
event_id: 428
youtube_id:
agenda: https://docs.google.com/document/d/13uoxQY9AP3xloCmmjjzqXZ-yigs2AwrfOkQYa1FAVc8/edit?usp=sharing
sponsor: Chi Hack Night Community
asl_provided: false
tags: 
published: true

---

The Cook County Assessor’s Office (CCAO) is responsible for determining the assessed value of over 1.8 million properties. The Office uses [mass appraisal](https://www.iaao.org/media/standards/StandardOnMassAppraisal.pdf) to calculate values for the vast majority of properties, including single-family homes, multi-family apartment buildings, condominiums, and more.

Last year, the CCAO's Data Science department created [a new residential valuation model using R](https://gitlab.com/ccao-data-science---modeling/ccao_sf_cama_dev). The model outperformed the Assessor's existing models (written in SPSS), but was complicated and difficult to use. 

This year, the Data Science department created [V2 of its residential valuation model](https://gitlab.com/ccao-data-science---modeling/models/ccao_res_avm). The new model uses the recently released [Tidymodels R framework](https://www.tidymodels.org/) to significantly simplify the modeling codebase and machine learning workflow. It also uses [LightGBM](https://lightgbm.readthedocs.io/en/latest/), [a boosted tree modeling framework](https://arogozhnikov.github.io/2016/06/24/gradient_boosting_explained.html), as the primary modeling backend. The result is a model with simpler code that trains faster, performs better, and can predict new values for the entire county in under two minutes. 

CCAO Senior Data Scientist, Dan Snow, will walk through V2 of the new residential model. He'll cover major modeling choices, what features/data are included, and what adjustments are made to initial model results. He'll also discuss initial model results, ongoing modeling and data quality issues that impact performance, and planned future improvements and features. If you're interested in knowing how your property is valued or in housing, equity, machine learning, or real estate, attend this talk!

---

**ASL** This event will {% unless page.asl_provided %} not {% endunless %}have an American Sign Language interpreter.
