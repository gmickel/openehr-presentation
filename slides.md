---
theme: default
background: https://cdn.midjourney.com/5a05c8e9-1f0e-48c0-a450-6966b3fb2fc7/0_3.png
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## OpenEHR Intro Session
  A comprehensive guide for those leading our OpenEHR integration efforts
drawings:
  persist: false
transition: slide-left
globalComponents:
  + ./global-components.ts
title: OpenEHR Intro Session
---

# OpenEHR Intro Session

A comprehensive guide for those leading our OpenEHR integration efforts

<img src="/logo.png" style="display: block; margin: 0 auto; " />

---
layout: two-cols-header
---

# Table of Contents 📚

::left::

01. Introduction to OpenEHR
02. Why OpenEHR?
03. What isn't typically stored in OpenEHR
04. Main vendors/products
05. The Reference Model (RM)
06. Archetypes
07. Templates
08. Compositions

::right::

09. How RM, Archetypes, Templates, and Compositions tie together
10. Operational templates
11. Web templates
12. Flat format vs. non-flat format
13. REST API interaction
14. AQL (Archetype Query Language)
15. Best practices and common pitfalls
16. Hands-on examples

---
layout: intro
---

# Introduction to OpenEHR 🚀

Revolutionizing healthcare data management

---

# What is OpenEHR? 🤔
* An open standard specification for health data storage and exchange
* Developed by the OpenEHR Foundation
* Aims to improve the quality of healthcare through better use of information
* Separates clinical knowledge from technical implementation

<v-click>

## Key Features:

* Two-level modeling approach
* Archetype-based design
* Vendor-neutral
* Supports semantic interoperability

</v-click>

---
layout: statement
---

# Wikipedia Definition 📖

openEHR is an open standard specification in health informatics that describes the management and storage, retrieval and exchange of health data in electronic health records (EHRs). In openEHR, all health data for a person is stored in a "one lifetime", vendor-independent, person-centred EHR.

The openEHR specifications include an EHR Extract specification but are otherwise not primarily concerned with the exchange of data between EHR-systems as this is the focus of other standards such as EN 13606 and HL7 (Health Level Seven -> z. B. FHIR).

---
layout: two-cols-header
---

# OpenEHR Architecture 🏗️

::left::

* Separates information and knowledge
* Uses archetypes and templates
* Based on a stable reference model

::right::

```mermaid
graph TD
    A[OpenEHR Architecture] --> B[Reference Model]
    A --> C[Archetypes]
    A --> D[Templates]
    B --> E[Data Types]
    B --> F[Structures]
    C --> G[Clinical Knowledge]
    D --> H[Use-Case Specific]
    E --> I[Quantity, Text, etc.]
    F --> J[Composition, Section, etc.]
```

---
layout: statement
---

# Why OpenEHR? 🎯

Addressing the challenges of modern healthcare IT

---

# Benefits of OpenEHR 👍

<v-clicks>

* **Standardization** of health data across systems and countries
* **Interoperability** between different healthcare IT systems
* **Future-proofing** clinical data
* **Clinician-led** development of data models
* **Flexibility** to adapt to changing medical knowledge
* **Semantic querying** capabilities
* **Reduced vendor lock-in**
* **Improved data quality** and consistency

</v-clicks>

---

# Drawbacks of OpenEHR 👎

<v-clicks>

* **Complexity** of the modeling approach
* **Steep learning curve** for developers
* **Limited tooling** for archetype development
* **Integration challenges** with existing systems
* **Resource-intensive** implementation
* <span v-mark>**Model-driven development** may not suit all projects</span>

</v-clicks>

---
layout: two-cols-header
---

# OpenEHR vs Traditional EHR Systems 🥊

::left::

## Traditional EHR

* Fixed data structures
* Limited extensibility
* Vendor-specific implementations
* Difficult to adapt to new requirements

::right::

## OpenEHR

* Flexible, archetype-based models
* Easily extensible
* Vendor-neutral standard
* Adaptable to evolving healthcare needs

---
layout: two-cols-header
---

# What isn't typically stored in OpenEHR 🚫

While OpenEHR is designed to handle a wide range of clinical data, some types of information are usually managed in separate systems:

::left::

<v-clicks>

* **Administrative data**:
  + Billing information
  + Staff schedules
  + Patient appointments
* **Authentication and access control**:
  + User accounts and permissions
* **Raw imaging data**:
  + DICOM files
  + Large medical image datasets

</v-clicks>

::right::

<v-clicks>

* **Large binary files**:
  + Video recordings of procedures
  + Audio files from dictations
  + Scanned documents
* **Non-clinical operational data**:
  + Hospital bed availability
  + Inventory management
  + Equipment maintenance logs

</v-clicks>

---

# Integration with Non-OpenEHR Systems 🤝

While OpenEHR focuses on clinical data, it can reference external resources:

```mermaid
graph LR
    A[OpenEHR EHR] --> B[Clinical Data]
    A -.-> C[External References]
    C --> D[PACS for Imaging]
    C --> E[Administrative System]
    C --> F[Financial System]
```

<v-click>

This approach allows for:

* Comprehensive patient records
* Integration with existing hospital systems
* Efficient data management across different domains

</v-click>

---
layout: two-cols-header
---

# Main Vendors/Products 🏪

::left::

## Better

* Offers Better Platform
* Provides tools for building healthcare apps and integrating systems
* [Better Platform](https://www.better.care/platform)

<v-click>

**Note**: We have a central Better instance available for testing purposes.

</v-click>

::right::

## EHRbase

* Open-source OpenEHR clinical data repository
* Implements latest OpenEHR specifications
* [EHRbase GitHub](https://github.com/ehrbase/ehrbase)

<v-click>

**Note**: An EHRbase setup guide is available in our Confluence: [EHRbase Setup Guide](https://jira.cistec.com/confluence/pages/viewpage.action?pageId=176456056)

</v-click>

---
layout: two-cols-header
---

# Comparing Better and EHRbase ⚖️

::left::

## Better

* Commercial product
* Comprehensive suite of tools
* Professional support
* Rapid development capabilities

::right::

## EHRbase

* Open-source
* Community-driven development
* Highly customizable
* Suitable for research and custom implementations
* Vendors such as VitaGroup offer professional services and products based on EHRbase

<!-- shit documentation -->

---
layout: statement
---

# The Reference Model (RM) 🧱

The foundation of OpenEHR architecture

---

# Understanding the Reference Model 💡
* Defines the logical structures of health records
* Ensures consistency across all OpenEHR systems
* Provides a stable base for building archetypes and templates

<v-click>

## Key components:

* Data structures (e.g., COMPOSITION, SECTION, ENTRY)
* Data types (e.g., DV_TEXT, DV_QUANTITY)
* Support information (e.g., PARTICIPATION, AUDIT_DETAILS)

</v-click>

---
layout: two-cols-header
---

# RM: Data Structures 🏗️

::left::

* COMPOSITION
* SECTION
* ENTRY
  + OBSERVATION
  + EVALUATION
  + INSTRUCTION
  + ACTION
* CLUSTER
* ELEMENT

::right::

```mermaid
graph TD
    A[COMPOSITION] --> B[SECTION]
    B --> C[ENTRY]
    C --> D[OBSERVATION]
    C --> E[EVALUATION]
    C --> F[INSTRUCTION]
    C --> G[ACTION]
    C --> H[CLUSTER]
    H --> I[ELEMENT]
```

---

# RM: Data Types 🧩

OpenEHR RM defines various data types to represent different kinds of clinical information:

<v-clicks>

* **DV_TEXT**: For free text data
* **DV_CODED_TEXT**: For coded terms (e.g., from a terminology)
* **DV_QUANTITY**: For measurements with units
* **DV_COUNT**: For countable items
* **DV_DATETIME**: For date and time values
* **DV_BOOLEAN**: For true/false values
* **DV_IDENTIFIER**: For identifiers (e.g., social security numbers)
* **DV_MULTIMEDIA**: For images, audio, or other media
* **DV_PARSABLE**: For parsable content (e.g., mathematical expressions)

</v-clicks>

---

# Example: Blood Pressure in RM 🩺

<ScrollableCode>

```json
{
  "_type": "OBSERVATION",
  "data": {
    "_type": "HISTORY",
    "events": [
      {
        "_type": "POINT_EVENT",
        "data": {
          "_type": "ITEM_LIST",
          "items": [
            {
              "_type": "ELEMENT",
              "name": { "_type": "DV_TEXT", "value": "Systolic" },
              "value": {
                "_type": "DV_QUANTITY",
                "magnitude": 120,
                "units": "mm[Hg]"
              }
            },
            {
              "_type": "ELEMENT",
              "name": { "_type": "DV_TEXT", "value": "Diastolic" },
              "value": {
                "_type": "DV_QUANTITY",
                "magnitude": 80,
                "units": "mm[Hg]"
              }
            }
          ]
        }
      }
    ]
  }
}
```

</ScrollableCode>

---
layout: statement
---

# Archetypes 🧬

Reusable clinical concept definitions

---

# Understanding Archetypes 🔍
* Formal definitions of clinical concepts
* Written in Archetype Definition Language (ADL)
* Constraint-based approach to defining clinical content
* Developed and reviewed by domain experts

<v-click>

## Examples of Archetypes:

* Blood Pressure
* Body Temperature
* Medication Order
* Laboratory Result

</v-click>

---

# Anatomy of an Archetype 🔬

<ScrollableCode>

```json
archetype (adl_version=1.4; uid=1013a2b4-b7d2-4594-90d6-e1992e9aae3d)
	openEHR-EHR-OBSERVATION.blood_pressure.v2
concept
	[at0000]	-- Blood pressure measurement
language
	original_language = <[ISO_639-1::en]>
description
	original_author = <
		["name"] = <"Sam Heard">
		["organisation"] = <"Ocean Informatics">
		["email"] = <"sam.heard@oceaninformatics.com">
		["date"] = <"2006-03-26">
	>
	details = <
		["en"] = <
			language = <[ISO_639-1::en]>
			purpose = <"To record the systemic arterial blood pressure of an individual.">
			use = <"Use to record all representations of systemic arterial blood pressure measurement,
            including current or historical blood pressure readings or measurements.">
			keywords = <"systolic", "diastolic", "blood pressure", "mean arterial pressure">
			misuse = <"Not to be used to record measurements of intra-arterial pressure.
            Use OBSERVATION.intravascular_pressure for this purpose.">
			copyright = <"© openEHR Foundation">
		>
	>
definition
	OBSERVATION[at0000] matches {	-- Blood pressure measurement
		data matches {
			HISTORY[at0001] matches {	-- History
				events cardinality matches {1..*; unordered} matches {
					EVENT[at0006] occurrences matches {0..*} matches {	-- Any event
						data matches {
							ITEM_TREE[at0003] matches {	-- Tree
								items cardinality matches {0..*; unordered} matches {
									ELEMENT[at0004] occurrences matches {0..1} matches {	-- Systolic
										value matches {
											DV_QUANTITY matches {
												property = <[openehr::125]>
												list = <
													["1"] = <
														units = <"mm[Hg]">
														magnitude = <|0.0..1000.0|>
														precision = <|0|>
													>
												>
											}
										}
									}
									ELEMENT[at0005] occurrences matches {0..1} matches {	-- Diastolic
										value matches {
											DV_QUANTITY matches {
												property = <[openehr::125]>
												list = <
													["1"] = <
														units = <"mm[Hg]">
														magnitude = <|0.0..1000.0|>
														precision = <|0|>
													>
												>
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
ontology
	term_definitions = <
		["en"] = <
			items = <
				["at0000"] = <
					text = <"Blood pressure measurement">
					description = <"The local measurement of arterial blood pressure which is a surrogate for arterial pressure in the systemic circulation.">
				>
				["at0001"] = <
					text = <"History">
					description = <"@ internal @">
				>
				["at0003"] = <
					text = <"Tree">
					description = <"@ internal @">
				>
				["at0004"] = <
					text = <"Systolic">
					description = <"The systolic blood pressure measurement.">
				>
				["at0005"] = <
					text = <"Diastolic">
					description = <"The diastolic blood pressure measurement.">
				>
				["at0006"] = <
					text = <"Any event">
					description = <"Default, unspecified point in time or interval event which may be explicitly defined in a template or at run-time.">
				>
			>
		>
	>
```

</ScrollableCode>

---

# Key Components of an Archetype 🗝️

<v-clicks>

01. **Header**: Contains metadata about the archetype (version, ID, etc.)
02. **Concept**: Defines the clinical concept represented by the archetype
03. **Language**: Specifies the original language and translations
04. **Description**: Provides detailed information about the archetype's purpose, use, and authorship
05. **Definition**: Describes the structure and constraints of the archetype
06. **Ontology**: Contains term definitions and bindings to external terminologies

</v-clicks>

---

# Archetype Modeling Tools 🛠️

There are several tools available for creating and managing archetypes:

* **Archetype Editor**: A standalone Java application for creating and editing archetypes - [Download Archetype Editor](https://www.openehr.org/downloads/archetypeeditor/home)

* **Template Designer**: For creating templates based on archetype - [Ocean Template Designer](https://oceanhealthsystems.com/software/archetype-editor)

* **Clinical Knowledge Manager (CKM)**: A web-based platform for collaborative archetype development and management - [openEHR CKM](https://ckm.openehr.org/ckm/) / [Apperta CKM](https://ckm.apperta.org/ckm/)

* **Archetype Designer**: A web-based tool for creating and editing archetypes and templates - [Better Archetype Designer](https://tools.better.care/archetype-designer/)

* **ADL Designer**: Another web-based tool for creating and editing archetypes and templates - [ADL Designer](https://tools.openehr.org/designer/)

---
layout: center
---

# Archetype Designer 🎨

![ADL Designer](/arche2.png)

---
layout: statement
---

# Templates 📄

Combining archetypes for specific use cases

---

# Understanding Templates 🧠
* Combine and constrain archetypes for specific use cases
* Define the structure of data entry forms or documents
* Allow for local customization while maintaining interoperability

<v-click>

## Examples of Templates:

* Diabetes Consultation
* Medical Score such as APGAR
* Vital Signs Chart
* Medication Reconciliation Form

</v-click>

---

# Template Structure 🏗️

```mermaid
graph TD
    A[Template] --> B[Archetype 1]
    A --> C[Archetype 2]
    A --> D[Archetype 3]
    B --> E[Constraint 1]
    B --> F[Constraint 2]
    C --> G[Constraint 3]
    D --> H[Constraint 4]
```

---

# Template Example: DOSS 🧮

<ScrollableCode>

```xml
<template xmlns="http://schemas.openehr.org/v1">
  <language>
    <terminology_id>
      <value>ISO_639-1</value>
    </terminology_id>
    <code_string>en</code_string>
  </language>
  <description>
    <original_author id="date">2024-05-29</original_author>
    <lifecycle_state>unmanaged</lifecycle_state>
    <other_details id="licence"/>
    <other_details id="custodian_organisation"/>
    <other_details id="original_namespace"/>
    <other_details id="original_publisher"/>
    <other_details id="custodian_namespace"/>
    <other_details id="sem_ver">1.0.0</other_details>
    <other_details id="PARENT:MD5-CAM-1.0.1">327A8885F97587660404644C3C6053B6</other_details>
    <other_details id="build_uid"/>
    <other_details id="MD5-CAM-1.0.1">109e61f8eb7e7b1e28a63248c998109c</other_details>
    <other_details id="Generated By">Archetype Designer v1.24.12, user=80834515@github, repositoryId=use-case-9fm</other_details>
    <details>
      <language>
        <terminology_id>
          <value>ISO_639-1</value>
        </terminology_id>
        <code_string>de</code_string>
      </language>
      <purpose>Not Specified</purpose>
    </details>
    <details>
      <language>
        <terminology_id>
          <value>ISO_639-1</value>
        </terminology_id>
        <code_string>en</code_string>
      </language>
      <purpose>Not Specified</purpose>
    </details>
  </description>
  <uid>
    <value>50aca5b8-2563-4243-ac40-12e602a2eb43</value>
  </uid>
  <template_id>
    <value>cistec.openehr.dos.v1</value>
  </template_id>
  <concept>cistec.openehr.dos.v1</concept>
  <definition>
    <rm_type_name>COMPOSITION</rm_type_name>
    <occurrences>
      <lower_included>true</lower_included>
      <upper_included>true</upper_included>
      <lower_unbounded>false</lower_unbounded>
      <upper_unbounded>false</upper_unbounded>
      <lower>1</lower>
      <upper>1</upper>
    </occurrences>
    <node_id>at0000</node_id>
    <attributes xsi:type="C_SINGLE_ATTRIBUTE" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <rm_attribute_name>category</rm_attribute_name>
      <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>1</lower>
        <upper>1</upper>
      </existence>
      <match_negated>false</match_negated>
      <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>DV_CODED_TEXT</rm_type_name>
        <occurrences>
          <lower_included>true</lower_included>
          <upper_included>true</upper_included>
          <lower_unbounded>false</lower_unbounded>
          <upper_unbounded>false</upper_unbounded>
          <lower>1</lower>
          <upper>1</upper>
        </occurrences>
        <node_id/>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
          <rm_attribute_name>defining_code</rm_attribute_name>
          <existence>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
          </existence>
          <match_negated>false</match_negated>
          <children xsi:type="C_CODE_PHRASE">
            <rm_type_name>CODE_PHRASE</rm_type_name>
            <occurrences>
              <lower_included>true</lower_included>
              <upper_included>true</upper_included>
              <lower_unbounded>false</lower_unbounded>
              <upper_unbounded>false</upper_unbounded>
              <lower>1</lower>
              <upper>1</upper>
            </occurrences>
            <node_id/>
            <terminology_id>
              <value>openehr</value>
            </terminology_id>
            <code_list>433</code_list>
          </children>
        </attributes>
      </children>
    </attributes>
    <attributes xsi:type="C_SINGLE_ATTRIBUTE" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <rm_attribute_name>context</rm_attribute_name>
      <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>0</lower>
        <upper>1</upper>
      </existence>
      <match_negated>false</match_negated>
      <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>EVENT_CONTEXT</rm_type_name>
        <occurrences>
          <lower_included>true</lower_included>
          <upper_included>true</upper_included>
          <lower_unbounded>false</lower_unbounded>
          <upper_unbounded>false</upper_unbounded>
          <lower>1</lower>
          <upper>1</upper>
        </occurrences>
        <node_id/>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
          <rm_attribute_name>other_context</rm_attribute_name>
          <existence>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>0</lower>
            <upper>1</upper>
          </existence>
          <match_negated>false</match_negated>
          <children xsi:type="C_COMPLEX_OBJECT">
            <rm_type_name>ITEM_TREE</rm_type_name>
            <occurrences>
              <lower_included>true</lower_included>
              <upper_included>true</upper_included>
              <lower_unbounded>false</lower_unbounded>
              <upper_unbounded>false</upper_unbounded>
              <lower>1</lower>
              <upper>1</upper>
            </occurrences>
            <node_id>at0001</node_id>
            <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
              <rm_attribute_name>items</rm_attribute_name>
              <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
              </existence>
              <match_negated>false</match_negated>
              <children xsi:type="ARCHETYPE_SLOT">
                <rm_type_name>CLUSTER</rm_type_name>
                <occurrences>
                  <lower_included>true</lower_included>
                  <upper_included>false</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>true</upper_unbounded>
                  <lower>0</lower>
                </occurrences>
                <node_id>at0002</node_id>
                <includes>
                  <string_expression>archetype_id/value matches {/.*/}</string_expression>
                  <expression xsi:type="EXPR_BINARY_OPERATOR">
                    <type>Boolean</type>
                    <operator>2007</operator>
                    <precedence_overridden>false</precedence_overridden>
                    <left_operand xsi:type="EXPR_LEAF">
                      <type>String</type>
                      <item xsi:type="xs:string" xmlns:xs="http://www.w3.org/2001/XMLSchema">archetype_id/value</item>
                      <reference_type>attribute</reference_type>
                    </left_operand>
                    <right_operand xsi:type="EXPR_LEAF">
                      <type>String</type>
                      <item xsi:type="C_STRING">
                        <pattern>.*</pattern>
                      </item>
                      <reference_type>constraint</reference_type>
                    </right_operand>
                  </expression>
                </includes>
              </children>
              <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                  <lower_included>true</lower_included>
                  <upper_included>false</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>true</upper_unbounded>
                  <lower>0</lower>
                </interval>
              </cardinality>
            </attributes>
          </children>
        </attributes>
      </children>
    </attributes>
    <attributes xsi:type="C_MULTIPLE_ATTRIBUTE" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <rm_attribute_name>content</rm_attribute_name>
      <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>0</lower>
        <upper>1</upper>
      </existence>
      <match_negated>false</match_negated>
      <children xsi:type="C_ARCHETYPE_ROOT">
        <rm_type_name>OBSERVATION</rm_type_name>
        <occurrences>
          <lower_included>true</lower_included>
          <upper_included>true</upper_included>
          <lower_unbounded>false</lower_unbounded>
          <upper_unbounded>false</upper_unbounded>
          <lower>0</lower>
          <upper>1</upper>
        </occurrences>
        <node_id>at0000</node_id>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
          <rm_attribute_name>data</rm_attribute_name>
          <existence>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
          </existence>
          <match_negated>false</match_negated>
          <children xsi:type="C_COMPLEX_OBJECT">
            <rm_type_name>HISTORY</rm_type_name>
            <occurrences>
              <lower_included>true</lower_included>
              <upper_included>true</upper_included>
              <lower_unbounded>false</lower_unbounded>
              <upper_unbounded>false</upper_unbounded>
              <lower>1</lower>
              <upper>1</upper>
            </occurrences>
            <node_id>at0001</node_id>
            <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
              <rm_attribute_name>events</rm_attribute_name>
              <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
              </existence>
              <match_negated>false</match_negated>
              <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>POINT_EVENT</rm_type_name>
                <occurrences>
                  <lower_included>true</lower_included>
                  <upper_included>true</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>false</upper_unbounded>
                  <lower>0</lower>
                  <upper>1</upper>
                </occurrences>
                <node_id>at0002</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                  <rm_attribute_name>data</rm_attribute_name>
                  <existence>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                  </existence>
                  <match_negated>false</match_negated>
                  <children xsi:type="C_COMPLEX_OBJECT">
                    <rm_type_name>ITEM_TREE</rm_type_name>
                    <occurrences>
                      <lower_included>true</lower_included>
                      <upper_included>true</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>false</upper_unbounded>
                      <lower>1</lower>
                      <upper>1</upper>
                    </occurrences>
                    <node_id>at0003</node_id>
                    <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                      <rm_attribute_name>items</rm_attribute_name>
                      <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                      </existence>
                      <match_negated>false</match_negated>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>false</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>true</upper_unbounded>
                          <lower>0</lower>
                        </occurrences>
                        <node_id>at0004</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_QUANTITY">
                            <rm_type_name>DV_QUANTITY</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <property>
                              <terminology_id>
                                <value>openehr</value>
                              </terminology_id>
                              <code_string>128</code_string>
                            </property>
                            <list>
                              <magnitude>
                                <lower_included>true</lower_included>
                                <upper_included>false</upper_included>
                                <lower_unbounded>false</lower_unbounded>
                                <upper_unbounded>false</upper_unbounded>
                                <lower>0.0</lower>
                                <upper>200.0</upper>
                              </magnitude>
                              <units>a</units>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <cardinality>
                        <is_ordered>false</is_ordered>
                        <is_unique>false</is_unique>
                        <interval>
                          <lower_included>true</lower_included>
                          <upper_included>false</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>true</upper_unbounded>
                          <lower>0</lower>
                        </interval>
                      </cardinality>
                    </attributes>
                  </children>
                </attributes>
              </children>
              <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                  <lower_included>true</lower_included>
                  <upper_included>false</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>true</upper_unbounded>
                  <lower>1</lower>
                </interval>
              </cardinality>
            </attributes>
          </children>
        </attributes>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
          <rm_attribute_name>protocol</rm_attribute_name>
          <existence>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>0</lower>
            <upper>1</upper>
          </existence>
          <match_negated>false</match_negated>
          <children xsi:type="C_COMPLEX_OBJECT">
            <rm_type_name>ITEM_TREE</rm_type_name>
            <occurrences>
              <lower_included>true</lower_included>
              <upper_included>true</upper_included>
              <lower_unbounded>false</lower_unbounded>
              <upper_unbounded>false</upper_unbounded>
              <lower>1</lower>
              <upper>1</upper>
            </occurrences>
            <node_id>at0008</node_id>
            <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
              <rm_attribute_name>items</rm_attribute_name>
              <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
              </existence>
              <match_negated>false</match_negated>
              <children xsi:type="ARCHETYPE_SLOT">
                <rm_type_name>CLUSTER</rm_type_name>
                <occurrences>
                  <lower_included>true</lower_included>
                  <upper_included>false</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>true</upper_unbounded>
                  <lower>0</lower>
                </occurrences>
                <node_id>at0009</node_id>
                <includes>
                  <string_expression>archetype_id/value matches {/.*/}</string_expression>
                  <expression xsi:type="EXPR_BINARY_OPERATOR">
                    <type>Boolean</type>
                    <operator>2007</operator>
                    <precedence_overridden>false</precedence_overridden>
                    <left_operand xsi:type="EXPR_LEAF">
                      <type>String</type>
                      <item xsi:type="xs:string" xmlns:xs="http://www.w3.org/2001/XMLSchema">archetype_id/value</item>
                      <reference_type>attribute</reference_type>
                    </left_operand>
                    <right_operand xsi:type="EXPR_LEAF">
                      <type>String</type>
                      <item xsi:type="C_STRING">
                        <pattern>.*</pattern>
                      </item>
                      <reference_type>constraint</reference_type>
                    </right_operand>
                  </expression>
                </includes>
              </children>
              <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                  <lower_included>true</lower_included>
                  <upper_included>false</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>true</upper_unbounded>
                  <lower>0</lower>
                </interval>
              </cardinality>
            </attributes>
          </children>
        </attributes>
        <archetype_id>
          <value>openEHR-EHR-OBSERVATION.age_assertion.v1</value>
        </archetype_id>
        <term_definitions code="at0000">
          <items id="text">Age assertion</items>
          <items id="description">A statement about the age of an individual at a point in time.</items>
        </term_definitions>
        <term_definitions code="at0001">
          <items id="text">Event Series</items>
          <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0002">
          <items id="text">Point in time event</items>
          <items id="description">Default, unspecified point in time event which may be explicitly defined in a template or at run-time.</items>
        </term_definitions>
        <term_definitions code="at0003">
          <items id="text">Tree</items>
          <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0004">
          <items id="text">Chronological age</items>
          <items id="description">The age of an individual at the event time, calculated from date of birth.</items>
          <items id="comment">In most use cases the DV_DURATION data type is used to record the Chronological age. The DV_INTERVAL_DURATION is used for recording a structured age interval in cases where there's uncertainty about the individual's exact age. The DV_QUANTITY data type is used for recording a decimal age in years or mean Julian years (365.25 days). The DV_TEXT data type is used for recording a textual representation of the individual's age, or age category often found in questionnaires. For example: 'P3M2W', '0,2884615384615385 a_j', '3 months 2 weeks' or '31-40 years' or 'Teenager'.</items>
        </term_definitions>
        <term_definitions code="at0005">
          <items id="text">Adjusted age</items>
          <items id="description">The age of a premature infant, calculated from their expected due date rather than their actual date of birth.</items>
          <items id="comment">Also known as 'Corrected age'. In most use cases the DV_DURATION data type is used to record the Adjusted age. The DV_QUANTITY data type is used for recording a decimal age in years or mean Julian years (365.25 days), and the DV_TEXT data type is used for recording a textual representation of the individual's age. For example: 'P3M2W', '0,2884615384615385 a_j' or '3 months 2 weeks'.</items>
        </term_definitions>
        <term_definitions code="at0006">
          <items id="text">Comment</items>
          <items id="description">Additional narrative about the age of an individual, not captured in other fields.</items>
        </term_definitions>
        <term_definitions code="at0008">
          <items id="text">Item tree</items>
          <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0009">
          <items id="text">Extension</items>
          <items id="description">Additional information required to extend the model with local content or to align with other reference models or formalisms.</items>
          <items id="comment">For example: local information requirements; or additional metadata to align with FHIR.</items>
        </term_definitions>
        <term_definitions code="a">
          <items id="text">yr</items>
          <items id="description">year</items>
        </term_definitions>
      </children>
      <children xsi:type="C_ARCHETYPE_ROOT">
        <rm_type_name>OBSERVATION</rm_type_name>
        <occurrences>
          <lower_included>true</lower_included>
          <upper_included>true</upper_included>
          <lower_unbounded>false</lower_unbounded>
          <upper_unbounded>false</upper_unbounded>
          <lower>0</lower>
          <upper>1</upper>
        </occurrences>
        <node_id>at0000</node_id>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
          <rm_attribute_name>data</rm_attribute_name>
          <existence>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
          </existence>
          <match_negated>false</match_negated>
          <children xsi:type="C_COMPLEX_OBJECT">
            <rm_type_name>HISTORY</rm_type_name>
            <occurrences>
              <lower_included>true</lower_included>
              <upper_included>true</upper_included>
              <lower_unbounded>false</lower_unbounded>
              <upper_unbounded>false</upper_unbounded>
              <lower>1</lower>
              <upper>1</upper>
            </occurrences>
            <node_id>at0001</node_id>
            <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
              <rm_attribute_name>events</rm_attribute_name>
              <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
              </existence>
              <match_negated>false</match_negated>
              <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>POINT_EVENT</rm_type_name>
                <occurrences>
                  <lower_included>true</lower_included>
                  <upper_included>true</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>false</upper_unbounded>
                  <lower>0</lower>
                  <upper>1</upper>
                </occurrences>
                <node_id>at0002</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                  <rm_attribute_name>data</rm_attribute_name>
                  <existence>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                  </existence>
                  <match_negated>false</match_negated>
                  <children xsi:type="C_COMPLEX_OBJECT">
                    <rm_type_name>ITEM_TREE</rm_type_name>
                    <occurrences>
                      <lower_included>true</lower_included>
                      <upper_included>true</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>false</upper_unbounded>
                      <lower>1</lower>
                      <upper>1</upper>
                    </occurrences>
                    <node_id>at0003</node_id>
                    <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                      <rm_attribute_name>items</rm_attribute_name>
                      <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                      </existence>
                      <match_negated>false</match_negated>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0005</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0006</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0007</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0073</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>name</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_COMPLEX_OBJECT">
                            <rm_type_name>DV_CODED_TEXT</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0009</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0010</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0011</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0074</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0012</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0013</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0014</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0075</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0015</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0016</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0017</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0076</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0018</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0019</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0020</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0077</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0045</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0046</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0047</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0078</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0051</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0052</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0053</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0079</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0054</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0055</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0056</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0080</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0057</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0058</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0059</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0081</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0048</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0049</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0050</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0082</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0060</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0061</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0062</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0083</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0063</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0064</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0065</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0084</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0066</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0067</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0068</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0085</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>0</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0069</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_COMPLEX_OBJECT">
                            <rm_type_name>DV_COUNT</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                              <rm_attribute_name>magnitude</rm_attribute_name>
                              <existence>
                                <lower_included>true</lower_included>
                                <upper_included>true</upper_included>
                                <lower_unbounded>false</lower_unbounded>
                                <upper_unbounded>false</upper_unbounded>
                                <lower>1</lower>
                                <upper>1</upper>
                              </existence>
                              <match_negated>false</match_negated>
                              <children xsi:type="C_PRIMITIVE_OBJECT">
                                <rm_type_name>INTEGER</rm_type_name>
                                <occurrences>
                                  <lower_included>true</lower_included>
                                  <upper_included>true</upper_included>
                                  <lower_unbounded>false</lower_unbounded>
                                  <upper_unbounded>false</upper_unbounded>
                                  <lower>1</lower>
                                  <upper>1</upper>
                                </occurrences>
                                <node_id/>
                                <item xsi:type="C_INTEGER">
                                  <range>
                                    <lower_included>true</lower_included>
                                    <upper_included>true</upper_included>
                                    <lower_unbounded>false</lower_unbounded>
                                    <upper_unbounded>false</upper_unbounded>
                                    <lower>0</lower>
                                    <upper>13</upper>
                                  </range>
                                </item>
                              </children>
                            </attributes>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>0</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0070</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_COMPLEX_OBJECT">
                            <rm_type_name>DV_TEXT</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                          </children>
                        </attributes>
                      </children>
                      <cardinality>
                        <is_ordered>false</is_ordered>
                        <is_unique>false</is_unique>
                        <interval>
                          <lower_included>true</lower_included>
                          <upper_included>false</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>true</upper_unbounded>
                          <lower>0</lower>
                        </interval>
                      </cardinality>
                    </attributes>
                  </children>
                </attributes>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                  <rm_attribute_name>name</rm_attribute_name>
                  <existence>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                  </existence>
                  <match_negated>false</match_negated>
                  <children xsi:type="C_COMPLEX_OBJECT">
                    <rm_type_name>DV_TEXT</rm_type_name>
                    <occurrences>
                      <lower_included>true</lower_included>
                      <upper_included>true</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>false</upper_unbounded>
                      <lower>1</lower>
                      <upper>1</upper>
                    </occurrences>
                    <node_id/>
                    <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                      <rm_attribute_name>value</rm_attribute_name>
                      <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>1</lower>
                        <upper>1</upper>
                      </existence>
                      <match_negated>false</match_negated>
                      <children xsi:type="C_PRIMITIVE_OBJECT">
                        <rm_type_name>STRING</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id/>
                        <item xsi:type="C_STRING">
                          <list>Point in time</list>
                        </item>
                      </children>
                    </attributes>
                  </children>
                </attributes>
              </children>
              <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>POINT_EVENT</rm_type_name>
                <occurrences>
                  <lower_included>true</lower_included>
                  <upper_included>true</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>false</upper_unbounded>
                  <lower>0</lower>
                  <upper>1</upper>
                </occurrences>
                <node_id>at0002</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                  <rm_attribute_name>data</rm_attribute_name>
                  <existence>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                  </existence>
                  <match_negated>false</match_negated>
                  <children xsi:type="C_COMPLEX_OBJECT">
                    <rm_type_name>ITEM_TREE</rm_type_name>
                    <occurrences>
                      <lower_included>true</lower_included>
                      <upper_included>true</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>false</upper_unbounded>
                      <lower>1</lower>
                      <upper>1</upper>
                    </occurrences>
                    <node_id>at0003</node_id>
                    <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                      <rm_attribute_name>items</rm_attribute_name>
                      <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                      </existence>
                      <match_negated>false</match_negated>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0005</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0006</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0007</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0073</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>name</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_COMPLEX_OBJECT">
                            <rm_type_name>DV_CODED_TEXT</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0009</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0010</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0011</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0074</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0012</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0013</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0014</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0075</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0015</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0016</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0017</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0076</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0018</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0019</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0020</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0077</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0045</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0046</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0047</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0078</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0051</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0052</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0053</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0079</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0054</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0055</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0056</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0080</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0057</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0058</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0059</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0081</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0048</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0049</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0050</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0082</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0060</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0061</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0062</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0083</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0063</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0064</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0065</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0084</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0066</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_DV_ORDINAL">
                            <rm_type_name>DV_ORDINAL</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <list>
                              <value>0</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0067</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>1</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0068</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                            <list>
                              <value>99</value>
                              <symbol>
                                <defining_code>
                                  <terminology_id>
                                    <value>local</value>
                                  </terminology_id>
                                  <code_string>at0085</code_string>
                                </defining_code>
                              </symbol>
                            </list>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>0</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0069</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_COMPLEX_OBJECT">
                            <rm_type_name>DV_COUNT</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                              <rm_attribute_name>magnitude</rm_attribute_name>
                              <existence>
                                <lower_included>true</lower_included>
                                <upper_included>true</upper_included>
                                <lower_unbounded>false</lower_unbounded>
                                <upper_unbounded>false</upper_unbounded>
                                <lower>1</lower>
                                <upper>1</upper>
                              </existence>
                              <match_negated>false</match_negated>
                              <children xsi:type="C_PRIMITIVE_OBJECT">
                                <rm_type_name>INTEGER</rm_type_name>
                                <occurrences>
                                  <lower_included>true</lower_included>
                                  <upper_included>true</upper_included>
                                  <lower_unbounded>false</lower_unbounded>
                                  <upper_unbounded>false</upper_unbounded>
                                  <lower>1</lower>
                                  <upper>1</upper>
                                </occurrences>
                                <node_id/>
                                <item xsi:type="C_INTEGER">
                                  <range>
                                    <lower_included>true</lower_included>
                                    <upper_included>true</upper_included>
                                    <lower_unbounded>false</lower_unbounded>
                                    <upper_unbounded>false</upper_unbounded>
                                    <lower>0</lower>
                                    <upper>13</upper>
                                  </range>
                                </item>
                              </children>
                            </attributes>
                          </children>
                        </attributes>
                      </children>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ELEMENT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>0</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id>at0070</node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_COMPLEX_OBJECT">
                            <rm_type_name>DV_TEXT</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                          </children>
                        </attributes>
                      </children>
                      <cardinality>
                        <is_ordered>false</is_ordered>
                        <is_unique>false</is_unique>
                        <interval>
                          <lower_included>true</lower_included>
                          <upper_included>false</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>true</upper_unbounded>
                          <lower>0</lower>
                        </interval>
                      </cardinality>
                    </attributes>
                  </children>
                </attributes>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                  <rm_attribute_name>name</rm_attribute_name>
                  <existence>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                  </existence>
                  <match_negated>false</match_negated>
                  <children xsi:type="C_COMPLEX_OBJECT">
                    <rm_type_name>DV_TEXT</rm_type_name>
                    <occurrences>
                      <lower_included>true</lower_included>
                      <upper_included>true</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>false</upper_unbounded>
                      <lower>1</lower>
                      <upper>1</upper>
                    </occurrences>
                    <node_id/>
                    <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                      <rm_attribute_name>value</rm_attribute_name>
                      <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>1</lower>
                        <upper>1</upper>
                      </existence>
                      <match_negated>false</match_negated>
                      <children xsi:type="C_PRIMITIVE_OBJECT">
                        <rm_type_name>STRING</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id/>
                        <item xsi:type="C_STRING">
                          <list>Episode baseline</list>
                        </item>
                      </children>
                    </attributes>
                  </children>
                </attributes>
              </children>
              <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                  <lower_included>true</lower_included>
                  <upper_included>false</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>true</upper_unbounded>
                  <lower>1</lower>
                </interval>
              </cardinality>
            </attributes>
          </children>
        </attributes>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
          <rm_attribute_name>protocol</rm_attribute_name>
          <existence>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>0</lower>
            <upper>1</upper>
          </existence>
          <match_negated>false</match_negated>
          <children xsi:type="C_COMPLEX_OBJECT">
            <rm_type_name>ITEM_TREE</rm_type_name>
            <occurrences>
              <lower_included>true</lower_included>
              <upper_included>true</upper_included>
              <lower_unbounded>false</lower_unbounded>
              <upper_unbounded>false</upper_unbounded>
              <lower>1</lower>
              <upper>1</upper>
            </occurrences>
            <node_id>at0004</node_id>
            <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
              <rm_attribute_name>items</rm_attribute_name>
              <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
              </existence>
              <match_negated>false</match_negated>
              <children xsi:type="C_ARCHETYPE_ROOT">
                <rm_type_name>CLUSTER</rm_type_name>
                <occurrences>
                  <lower_included>true</lower_included>
                  <upper_included>true</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>false</upper_unbounded>
                  <lower>0</lower>
                  <upper>1</upper>
                </occurrences>
                <node_id>at0000</node_id>
                <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                  <rm_attribute_name>items</rm_attribute_name>
                  <existence>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                  </existence>
                  <match_negated>false</match_negated>
                  <children xsi:type="C_COMPLEX_OBJECT">
                    <rm_type_name>ELEMENT</rm_type_name>
                    <occurrences>
                      <lower_included>true</lower_included>
                      <upper_included>true</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>false</upper_unbounded>
                      <lower>1</lower>
                      <upper>1</upper>
                    </occurrences>
                    <node_id>at0001</node_id>
                    <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                      <rm_attribute_name>value</rm_attribute_name>
                      <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                      </existence>
                      <match_negated>false</match_negated>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>DV_BOOLEAN</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id/>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>value</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_PRIMITIVE_OBJECT">
                            <rm_type_name>BOOLEAN</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>1</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <item xsi:type="C_BOOLEAN">
                              <true_valid>true</true_valid>
                              <false_valid>false</false_valid>
                            </item>
                          </children>
                        </attributes>
                      </children>
                    </attributes>
                  </children>
                  <children xsi:type="C_COMPLEX_OBJECT">
                    <rm_type_name>ELEMENT</rm_type_name>
                    <occurrences>
                      <lower_included>true</lower_included>
                      <upper_included>true</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>false</upper_unbounded>
                      <lower>0</lower>
                      <upper>1</upper>
                    </occurrences>
                    <node_id>at0002</node_id>
                    <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                      <rm_attribute_name>value</rm_attribute_name>
                      <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                      </existence>
                      <match_negated>false</match_negated>
                      <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>DV_CODED_TEXT</rm_type_name>
                        <occurrences>
                          <lower_included>true</lower_included>
                          <upper_included>true</upper_included>
                          <lower_unbounded>false</lower_unbounded>
                          <upper_unbounded>false</upper_unbounded>
                          <lower>1</lower>
                          <upper>1</upper>
                        </occurrences>
                        <node_id/>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                          <rm_attribute_name>defining_code</rm_attribute_name>
                          <existence>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                          </existence>
                          <match_negated>false</match_negated>
                          <children xsi:type="C_CODE_PHRASE">
                            <rm_type_name>CODE_PHRASE</rm_type_name>
                            <occurrences>
                              <lower_included>true</lower_included>
                              <upper_included>true</upper_included>
                              <lower_unbounded>false</lower_unbounded>
                              <upper_unbounded>false</upper_unbounded>
                              <lower>0</lower>
                              <upper>1</upper>
                            </occurrences>
                            <node_id/>
                            <terminology_id>
                              <value>local_terms</value>
                            </terminology_id>
                            <code_list>patient_not_present</code_list>
                            <code_list>other</code_list>
                          </children>
                        </attributes>
                      </children>
                    </attributes>
                  </children>
                  <cardinality>
                    <is_ordered>false</is_ordered>
                    <is_unique>false</is_unique>
                    <interval>
                      <lower_included>true</lower_included>
                      <upper_included>false</upper_included>
                      <lower_unbounded>false</lower_unbounded>
                      <upper_unbounded>true</upper_unbounded>
                      <lower>1</lower>
                    </interval>
                  </cardinality>
                </attributes>
                <archetype_id>
                  <value>openEHR-EHR-CLUSTER.exclusion_exam.v1</value>
                </archetype_id>
                <template_id>
                  <value>cistec.openehr.dos.v1</value>
                </template_id>
                <term_definitions code="at0000">
                  <items id="text">Exclusion of examination</items>
                  <items id="description">Positive statement to record that a physical examination or clinical test was not performed.</items>
                </term_definitions>
                <term_definitions code="at0001">
                  <items id="text">Examination not done</items>
                  <items id="description">Statement to explicity record that the examination was not performed.</items>
                  <items id="comment">Record as True if the examination was not performed.</items>
                </term_definitions>
                <term_definitions code="at0002">
                  <items id="text">Reason</items>
                  <items id="description">Reason for the 'not done' statement.</items>
                  <items id="comment">For example: patient factors, equipment factors, time constraints.</items>
                </term_definitions>
                <term_definitions code="local_terms::patient_not_present">
                  <items id="text">Patient ist nicht anwesend</items>
                </term_definitions>
                <term_definitions code="local_terms::other">
                  <items id="text">Anderes</items>
                </term_definitions>
              </children>
              <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                  <lower_included>true</lower_included>
                  <upper_included>false</upper_included>
                  <lower_unbounded>false</lower_unbounded>
                  <upper_unbounded>true</upper_unbounded>
                  <lower>0</lower>
                </interval>
              </cardinality>
            </attributes>
          </children>
        </attributes>
        <archetype_id>
          <value>openEHR-EHR-OBSERVATION.delirium_observation_screening_scale_dos.v0</value>
        </archetype_id>
        <term_definitions code="at0000">
          <items id="text">Delirium Observation Screening Scale (DOS)</items>
          <items id="description">Delirium Observation Screening Scale DOS</items>
        </term_definitions>
        <term_definitions code="at0001">
          <items id="text">History</items>
          <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0002">
          <items id="text">Point in time</items>
          <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0003">
          <items id="text">Tree</items>
          <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0004">
          <items id="text">Item tree</items>
          <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0005">
          <items id="text">Dozes off</items>
          <items id="description">Dozes off during conversation or activities.</items>
        </term_definitions>
        <term_definitions code="at0006">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0007">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0009">
          <items id="text">Easily distracted</items>
          <items id="description">Is easily distracted by stimuli from the environment.</items>
        </term_definitions>
        <term_definitions code="at0010">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0011">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0012">
          <items id="text">Maintains attention</items>
          <items id="description">Maintains attention to conversation or action.</items>
        </term_definitions>
        <term_definitions code="at0013">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0014">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0015">
          <items id="text">Incomplete communication</items>
          <items id="description">Does not finish question or answer.</items>
        </term_definitions>
        <term_definitions code="at0016">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0017">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0018">
          <items id="text">Irrelevant responses</items>
          <items id="description">Gives answers that do not fit the question.</items>
        </term_definitions>
        <term_definitions code="at0019">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0020">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0045">
          <items id="text">Reacts slowly</items>
          <items id="description">Reacts slowly to instructions.</items>
        </term_definitions>
        <term_definitions code="at0046">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0047">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0048">
          <items id="text">Agitated</items>
          <items id="description">Is picking, disorderly, restless.</items>
        </term_definitions>
        <term_definitions code="at0049">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0050">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0051">
          <items id="text">Spatially disorientated</items>
          <items id="description">Thinks to be somewhere else.</items>
        </term_definitions>
        <term_definitions code="at0052">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0053">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0054">
          <items id="text">Temporal awareness</items>
          <items id="description">Knows which part of the day it is.</items>
        </term_definitions>
        <term_definitions code="at0055">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0056">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0057">
          <items id="text">Recent recall</items>
          <items id="description">Remembers recent event.</items>
        </term_definitions>
        <term_definitions code="at0058">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0059">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0060">
          <items id="text">Pulls accesses</items>
          <items id="description">Pulls ivtubes, feeding tubes, catheters etc.</items>
        </term_definitions>
        <term_definitions code="at0061">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0062">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0063">
          <items id="text">Emotionally volatile</items>
          <items id="description">Is easy or sudden emotional.</items>
        </term_definitions>
        <term_definitions code="at0064">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0065">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0066">
          <items id="text">Hallucinates</items>
          <items id="description">Sees/hears things which are not there.</items>
        </term_definitions>
        <term_definitions code="at0067">
          <items id="text">never</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
        </term_definitions>
        <term_definitions code="at0068">
          <items id="text">sometimes - always</items>
          <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
        </term_definitions>
        <term_definitions code="at0069">
          <items id="text">Score</items>
          <items id="description">Total score per shift</items>
        </term_definitions>
        <term_definitions code="at0070">
          <items id="text">Comment</items>
          <items id="description"/>
        </term_definitions>
        <term_definitions code="at0072">
          <items id="text">Extension</items>
          <items id="description"/>
        </term_definitions>
        <term_definitions code="at0073">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0074">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0075">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0076">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0077">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0078">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0079">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0080">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0081">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0082">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0083">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0084">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
        <term_definitions code="at0085">
          <items id="text">unable</items>
          <items id="description">During this shift, in contacts with the patient the described  behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
        </term_definitions>
      </children>
      <cardinality>
        <is_ordered>false</is_ordered>
        <is_unique>false</is_unique>
        <interval>
          <lower_included>true</lower_included>
          <upper_included>false</upper_included>
          <lower_unbounded>false</lower_unbounded>
          <upper_unbounded>true</upper_unbounded>
          <lower>1</lower>
        </interval>
      </cardinality>
    </attributes>
    <archetype_id>
      <value>openEHR-EHR-COMPOSITION.encounter.v1</value>
    </archetype_id>
    <template_id>
      <value>cistec.openehr.dos.v1</value>
    </template_id>
    <term_definitions code="at0000">
      <items id="text">DOS</items>
      <items id="description">Interaction, contact or care event between a subject of care and healthcare provider(s).</items>
    </term_definitions>
    <term_definitions code="at0001">
      <items id="text">Tree</items>
      <items id="description">@ internal @</items>
    </term_definitions>
    <term_definitions code="at0002">
      <items id="text">Extension</items>
      <items id="description">Additional information required to capture local context or to align with other reference models/formalisms.</items>
      <items id="comment">e.g. Local hospital departmental infomation or additional metadata to align with FHIR or CIMI equivalents.</items>
    </term_definitions>
  </definition>
  <ontology archetype_id="openEHR-EHR-COMPOSITION.encounter.v1">
    <term_definitions language="de">
      <items code="at0000">
        <items id="text">Observation-DOS</items>
        <items id="description">Interaktion, Kontakt oder Versorgungsereignis, zwischen einem Versorgungsempfänger und einem Gesundheitsdienstleister.</items>
      </items>
      <items code="at0001">
        <items id="text">Tree</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0002">
        <items id="text">Erweiterung</items>
        <items id="description">Zusätzliche Informationen, zur Erfassung lokaler Inhalte oder Anpassung an andere Referenzmodelle / Formalismen.</items>
        <items id="comment">Zum Beispiel Informationen zu lokalen Krankenhausabteilungen oder zusätzliche Metadaten zur Übereinstimmung mit FHIR- oder CIMI-Äquivalenten.</items>
      </items>
    </term_definitions>
  </ontology>
  <component_ontologies archetype_id="openEHR-EHR-OBSERVATION.age_assertion.v1">
    <term_definitions language="de">
      <items code="at0000">
        <items id="text">Altersangabe</items>
        <items id="description">Eine Aussage über das Alter einer Person zu einem bestimmten Zeitpunkt.</items>
      </items>
      <items code="at0001">
        <items id="text">Event Series</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0002">
        <items id="text">Ereigniszeitpunkt</items>
        <items id="description">Standardwert, ein undefinierter Zeitpunkt des Ereignisses, das explizit im Template oder zur Laufzeit der Anwendung definiert werden kann.</items>
      </items>
      <items code="at0003">
        <items id="text">Tree</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0004">
        <items id="text">Chronologisches Alter</items>
        <items id="description">Das Alter einer Person zum Zeitpunkt des Ereignisses, berechnet anhand des Geburtsdatums.</items>
        <items id="comment">In den meisten Anwendungsfällen wird der Datentyp DV_DURATION zur Erfassung des chronologischen Alters verwendet. Der Datentyp DV_INTERVAL_DURATION wird für die Aufzeichnung eines strukturierten Altersintervalls in Fällen verwendet, in denen Unsicherheit über das genaue Alter der Person besteht. Der Datentyp DV_QUANTITY wird für die Erfassung eines dezimalen Alters in Jahren oder mittleren julianischen Jahren (365,25 Tage) verwendet. Der Datentyp DV_TEXT wird für die Aufzeichnung einer textuellen Darstellung des Alters der Person oder einer Alterskategorie verwendet, die häufig in Fragebögen zu finden ist. Zum Beispiel: "P3M2W", "0,2884615384615385 a_j", "3 Monate 2 Wochen" oder "31-40 Jahre" oder "Teenager".</items>
      </items>
      <items code="at0005">
        <items id="text">Korrigiertes Alter</items>
        <items id="description">Das Alter eines Frühgeborenen, das anhand des voraussichtlichen Geburtstermins und nicht des tatsächlichen Geburtsdatums berechnet wird.</items>
        <items id="comment">Auch bekannt als 'Korrigiertes Alter'. In den meisten Anwendungsfällen wird der Datentyp DV_DURATION zur Erfassung des korrigierten Alters verwendet. Der Datentyp DV_QUANTITY wird für die Aufzeichnung eines dezimalen Alters in Jahren oder mittleren julianischen Jahren (365,25 Tage) verwendet, und der Datentyp DV_TEXT wird für die Aufzeichnung einer textuellen Darstellung des Alters der Person verwendet. Zum Beispiel: "P3M2W", "0,2884615384615385 a_j" oder "3 Monate 2 Wochen".</items>
      </items>
      <items code="at0006">
        <items id="text">Kommentar</items>
        <items id="description">Beschreibung des Alters einer Person, das nicht in anderen Datenelementen dargestellt wird.</items>
      </items>
      <items code="at0008">
        <items id="text">*Item tree(en)</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0009">
        <items id="text">Erweiterung</items>
        <items id="description">Zusätzliche Informationen zur Erfassung lokaler Inhalte oder Anpassung an andere Referenzmodelle/Formalismen.</items>
        <items id="comment">Zum Beispiel: Lokaler Informationsbedarf oder zusätzliche Metadaten zur Anpassung an FHIR-Ressourcen.</items>
      </items>
      <items code="a">
        <items id="text">yr</items>
        <items id="description">year</items>
      </items>
    </term_definitions>
  </component_ontologies>
  <component_ontologies archetype_id="openEHR-EHR-OBSERVATION.delirium_observation_screening_scale_dos.v0">
    <term_definitions language="de">
      <items code="at0000">
        <items id="text">Delirium Observation Screening Scale (DOS)</items>
        <items id="description">*Delirium Observation Screening Scale DOS (en)</items>
      </items>
      <items code="at0001">
        <items id="text">History</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0002">
        <items id="text">Point in time</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0003">
        <items id="text">Tree</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0004">
        <items id="text">Item tree</items>
        <items id="description">@ internal @</items>
      </items>
      <items code="at0005">
        <items id="text">Nickt ein</items>
        <items id="description">*Dozes off during conversation or activities. (en)</items>
      </items>
      <items code="at0006">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0007">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0009">
        <items id="text">Schnell abgelenkt</items>
        <items id="description">*Is easily distracted by stimuli from the environment. (en)</items>
      </items>
      <items code="at0010">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0011">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0012">
        <items id="text">Bleibt aufmerksam</items>
        <items id="description">*Maintains attention to conversation or action. (en)</items>
      </items>
      <items code="at0013">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0014">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0015">
        <items id="text">Unvollständige Kommunikation</items>
        <items id="description">*Does not finish question or answer. (en)</items>
      </items>
      <items code="at0016">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0017">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0018">
        <items id="text">Unpassende Antworten</items>
        <items id="description">*Gives answers that do not fit the question. (en)</items>
      </items>
      <items code="at0019">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0020">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0045">
        <items id="text">Reagiert verlangsamt</items>
        <items id="description">*Reacts slowly to instructions. (en)</items>
      </items>
      <items code="at0046">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0047">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0048">
        <items id="text">Erregt</items>
        <items id="description">*Is picking, disorderly, restless. (en)</items>
      </items>
      <items code="at0049">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0050">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0051">
        <items id="text">Räumlich desorientiert</items>
        <items id="description">*Thinks to be somewhere else. (en)</items>
      </items>
      <items code="at0052">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0053">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0054">
        <items id="text">Zeitliches Bewusstsein</items>
        <items id="description">*Knows which part of the day it is. (en)</items>
      </items>
      <items code="at0055">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0056">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0057">
        <items id="text">Erinnerung</items>
        <items id="description">*Remembers recent event. (en)</items>
      </items>
      <items code="at0058">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0059">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0060">
        <items id="text">Zieht an Zugängen</items>
        <items id="description">*Pulls ivtubes, feeding tubes, catheters etc. (en)</items>
      </items>
      <items code="at0061">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0062">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0063">
        <items id="text">Emotional unbeständig</items>
        <items id="description">*Is easy or sudden emotional. (en)</items>
      </items>
      <items code="at0064">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0065">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0066">
        <items id="text">Halluziniert</items>
        <items id="description">*Sees/hears things which are not there. (en)</items>
      </items>
      <items code="at0067">
        <items id="text">nie</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet</items>
      </items>
      <items code="at0068">
        <items id="text">manchmal - immer</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten einmal, einige Male oder sogar die ganze Zeit beobachtet</items>
      </items>
      <items code="at0069">
        <items id="text">Summe</items>
        <items id="description">Summe der Punkte pro Schicht</items>
      </items>
      <items code="at0070">
        <items id="text">Bemerkung</items>
        <items id="description"/>
      </items>
      <items code="at0072">
        <items id="text">Erweiterung</items>
        <items id="description"/>
      </items>
      <items code="at0073">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0074">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0075">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0076">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0077">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0078">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0079">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0080">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0081">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0082">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0083">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0084">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
      <items code="at0085">
        <items id="text">weiss nicht</items>
        <items id="description">Während dieser Schicht wurde das beschriebene Verhalten bei Kontakten mit dem Patienten nicht beobachtet, da der Patient schlief oder nicht die notwendigen verbalen Reaktionen gab ODER der Bewerter hält sich nicht für kompetent, das Fehlen oder Vorhandensein des Verhaltens zu beobachten</items>
      </items>
    </term_definitions>
  </component_ontologies>
  <component_ontologies archetype_id="openEHR-EHR-CLUSTER.exclusion_exam.v1">
    <term_definitions language="de">
      <items code="at0000">
        <items id="text">Ausschluss einer Untersuchung</items>
        <items id="description">Eine Aussage, dass eine körperliche Untersuchung oder ein klinischer Test nicht durchgeführt wurde.</items>
      </items>
      <items code="at0001">
        <items id="text">Nicht durchgeführte Untersuchung</items>
        <items id="description">Eine Aussage die ausdrücklich erfasst, dass die Untersuchung nicht durchgeführt wurde.</items>
        <items id="comment">Die Aussage wird als "wahr" erfasst, wenn die Untersuchung nicht durchgeführt wurde.</items>
      </items>
      <items code="at0002">
        <items id="text">Grund</items>
        <items id="description">Begründung der Aussage "nicht durchgeführt".</items>
        <items id="comment">Zum Beispiel: patientenbezogene Gründe, Ausstattungsgründe, zeitliche Beschränkungen.</items>
      </items>
      <items code="local_terms::patient_not_present">
        <items id="text">Patient ist nicht anwesend</items>
      </items>
      <items code="local_terms::other">
        <items id="text">Anderes</items>
      </items>
    </term_definitions>
  </component_ontologies>
</template>
```

</ScrollableCode>

---
layout: two-cols-header
---

# Template Benefits

::left::

* Customization for specific use cases
* Improved data entry efficiency
* Consistent data capture across an organization
* Easier integration with existing workflows

::right::

<v-click>

## Challenges:

* Balancing flexibility and standardization
* Managing template versions
* Ensuring alignment with underlying archetypes

</v-click>

---
layout: statement
---

# Compositions

The clinical documents of OpenEHR

---

# Understanding Compositions
* Top-level structures in OpenEHR
* Represent a clinical document or encounter
* Contain data structured according to templates
* Versioned and audited

<v-click>

## Examples of Compositions:

* Patient Visit Record
* Discharge Summary
* Radiology Report
* Medication Prescription

</v-click>

---

# Composition Structure

```mermaid
graph TD
    A[Composition] --> B[Context]
    A --> C[Content]
    B --> D[Patient]
    B --> E[Time]
    B --> F[Setting]
    C --> G[Section 1]
    C --> H[Section 2]
    G --> I[Entry 1]
    G --> J[Entry 2]
    H --> K[Entry 3]
    I --> L[Element 1]
    I --> M[Element 2]
    J --> N[Element 3]
    K --> O[Element 4]
```

---

# Composition Example: Patient Visit

<ScrollableCode>

```json
{
  "_type": "COMPOSITION",
  "name": {
    "_type": "DV_TEXT",
    "value": "Patient Visit"
  },
  "archetype_details": {
    "_type": "ARCHETYPED",
    "archetype_id": {
      "value": "openEHR-EHR-COMPOSITION.encounter.v1"
    },
    "template_id": {
      "value": "Patient Visit Template"
    }
  },
  "language": {
    "_type": "CODE_PHRASE",
    "terminology_id": {
      "_type": "TERMINOLOGY_ID",
      "value": "ISO_639-1"
    },
    "code_string": "en"
  },
  "territory": {
    "_type": "CODE_PHRASE",
    "terminology_id": {
      "_type": "TERMINOLOGY_ID",
      "value": "ISO_3166-1"
    },
    "code_string": "US"
  },
  "category": {
    "_type": "DV_CODED_TEXT",
    "value": "event",
    "defining_code": {
      "_type": "CODE_PHRASE",
      "terminology_id": {
        "_type": "TERMINOLOGY_ID",
        "value": "openehr"
      },
      "code_string": "433"
    }
  },
  "composer": {
    "_type": "PARTY_IDENTIFIED",
    "name": "Dr. Jane Smith"
  },
  "context": {
    "_type": "EVENT_CONTEXT",
    "start_time": {
      "_type": "DV_DATE_TIME",
      "value": "2023-07-01T10:30:00Z"
    },
    "setting": {
      "_type": "DV_CODED_TEXT",
      "value": "outpatient clinic",
      "defining_code": {
        "_type": "CODE_PHRASE",
        "terminology_id": {
          "_type": "TERMINOLOGY_ID",
          "value": "openehr"
        },
        "code_string": "238"
      }
    }
  },
  "content": [
    {
      "_type": "OBSERVATION",
      "name": {
        "_type": "DV_TEXT",
        "value": "Blood Pressure"
      },
      "archetype_details": {
        "_type": "ARCHETYPED",
        "archetype_id": {
          "value": "openEHR-EHR-OBSERVATION.blood_pressure.v2"
        }
      },
      "data": {
        "_type": "HISTORY",
        "origin": {
          "_type": "DV_DATE_TIME",
          "value": "2023-07-01T10:35:00Z"
        },
        "events": [
          {
            "_type": "POINT_EVENT",
            "time": {
              "_type": "DV_DATE_TIME",
              "value": "2023-07-01T10:35:00Z"
            },
            "data": {
              "_type": "ITEM_TREE",
              "items": [
                {
                  "_type": "ELEMENT",
                  "name": {
                    "_type": "DV_TEXT",
                    "value": "Systolic"
                  },
                  "value": {
                    "_type": "DV_QUANTITY",
                    "magnitude": 120,
                    "units": "mm[Hg]"
                  }
                },
                {
                  "_type": "ELEMENT",
                  "name": {
                    "_type": "DV_TEXT",
                    "value": "Diastolic"
                  },
                  "value": {
                    "_type": "DV_QUANTITY",
                    "magnitude": 80,
                    "units": "mm[Hg]"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

</ScrollableCode>

---

# Key Aspects of Compositions

<v-clicks>

01. **Metadata**: Information about the composition itself (e.g., archetype used, language, territory)
02. **Context**: Details about when and where the clinical event occurred
03. **Content**: The actual clinical data, structured according to archetypes and templates
04. **Versioning**: Each change creates a new version, maintaining a complete history
05. **Flexibility**: Can contain various types of entries (OBSERVATION, EVALUATION, INSTRUCTION, ACTION)
06. **Integrity**: Signed and sealed to ensure data integrity and non-repudiation

</v-clicks>

---
layout: statement
---

# Putting It All Together

The Building Blocks of OpenEHR

---
layout: two-cols-header
---

# OpenEHR Architecture Overview

::left::

```mermaid
graph TD
    A[Reference Model] --> B[Archetypes]
    B --> C[Templates]
    C --> D[Compositions]
    A -.-> D
    B -.-> D
```

::right::

<v-click>

* **Reference Model**: Provides the foundational data types and structures
* **Archetypes**: Define reusable clinical concepts based on the RM
* **Templates**: Combine and constrain archetypes for specific use cases
* **Compositions**: Use templates to structure actual patient data

</v-click>

---
layout: two-cols-header
---

# Interplay Between Components

::left::

## Design-Time

01. Reference Model is designed (not by us)
02. Archetypes are created based on RM (by domain experts, partially by us)
03. Templates are designed using archetypes (by us)

::right::

## Runtime

01. Templates guide data entry
02. Data is validated against archetypes
03. Compositions are created and stored
04. Data conforms to Reference Model
---

# Benefits of This Architecture

<v-clicks>

* **Separation of Concerns**: Clinical knowledge (archetypes) is separate from software implementation (RM)
* **Flexibility**: New clinical concepts can be added without changing the underlying software
* **Interoperability**: Standard RM and archetypes ensure data can be shared and understood across systems
* **Future-proofing**: Data remains valid even as clinical knowledge evolves
* **Querying**: Standardized structures allow for powerful querying capabilities

</v-clicks>

---
layout: statement
---

# Operational Templates

Bridging Design and Runtime, but not really for us

---

# Understanding Operational Templates
* Computable form of OpenEHR templates
* Used by EHR systems to validate and process data
* Generated from design-time templates
* Contain all necessary information for runtime operations

<v-click>

## Key Characteristics:

* Fully expanded structure
* All constraints resolved
* Ready for direct use by software

</v-click>

---

# Operational Template Structure

```mermaid
graph TD
    A[Operational Template] --> B[Metadata]
    A --> C[Definition]
    A --> D[Terminology]
    B --> E[Template ID]
    B --> F[Purpose]
    C --> G[RM Type]
    C --> H[Archetype References]
    C --> I[Constraints]
    D --> J[Term Definitions]
    D --> K[Value Sets]
```

---

# Example: Operational Template Snippet

<ScrollableCode>

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<template xmlns="http://schemas.openehr.org/v1">
    <language>
        <terminology_id>
            <value>ISO_639-1</value>
        </terminology_id>
        <code_string>en</code_string>
    </language>
    <description>
        <original_author id="date">2024-05-29</original_author>
        <lifecycle_state>unmanaged</lifecycle_state>
        <other_details id="licence"></other_details>
        <other_details id="custodian_organisation"></other_details>
        <other_details id="original_namespace"></other_details>
        <other_details id="original_publisher"></other_details>
        <other_details id="custodian_namespace"></other_details>
        <other_details id="sem_ver">1.0.0</other_details>
        <other_details id="PARENT:MD5-CAM-1.0.1">327A8885F97587660404644C3C6053B6</other_details>
        <other_details id="build_uid"></other_details>
        <other_details id="MD5-CAM-1.0.1">83ceb4d08e60ee7bf60f8179716c53c9</other_details>
        <other_details id="Generated By">Archetype Designer v1.24.12, user=80834515@github, repositoryId=use-case-9fm</other_details>
        <details>
            <language>
                <terminology_id>
                    <value>ISO_639-1</value>
                </terminology_id>
                <code_string>en</code_string>
            </language>
            <purpose>Not Specified</purpose>
        </details>
    </description>
    <uid>
        <value>50aca5b8-2563-4243-ac40-12e602a2eb43</value>
    </uid>
    <template_id>
        <value>cistec.openehr.dos.v1</value>
    </template_id>
    <concept>cistec.openehr.dos.v1</concept>
    <definition>
        <rm_type_name>COMPOSITION</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
        </occurrences>
        <node_id>at0000</node_id>
        <attributes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="C_SINGLE_ATTRIBUTE">
            <rm_attribute_name>category</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>1</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>DV_CODED_TEXT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id></node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>defining_code</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>1</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_CODE_PHRASE">
                        <rm_type_name>CODE_PHRASE</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <terminology_id>
                            <value>openehr</value>
                        </terminology_id>
                        <code_list>433</code_list>
                    </children>
                </attributes>
            </children>
        </attributes>
        <attributes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="C_SINGLE_ATTRIBUTE">
            <rm_attribute_name>context</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>EVENT_CONTEXT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id></node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>other_context</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ITEM_TREE</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id>at0001</node_id>
                        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                            <rm_attribute_name>items</rm_attribute_name>
                            <existence>
<lower_included>true</lower_included>
<upper_included>true</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>0</lower>
<upper>1</upper>
                            </existence>
                            <match_negated>false</match_negated>
                            <children xsi:type="ARCHETYPE_SLOT">
<rm_type_name>CLUSTER</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>false</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>true</upper_unbounded>
    <lower>0</lower>
</occurrences>
<node_id>at0002</node_id>
<includes>
    <string_expression>archetype_id/value matches {/.*/}</string_expression>
    <expression xsi:type="EXPR_BINARY_OPERATOR">
        <type>Boolean</type>
        <operator>2007</operator>
        <precedence_overridden>false</precedence_overridden>
        <left_operand xsi:type="EXPR_LEAF">
            <type>String</type>
            <item xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">archetype_id/value</item>
            <reference_type>attribute</reference_type>
        </left_operand>
        <right_operand xsi:type="EXPR_LEAF">
            <type>String</type>
            <item xsi:type="C_STRING">
                <pattern>.*</pattern>
            </item>
            <reference_type>constraint</reference_type>
        </right_operand>
    </expression>
</includes>
                            </children>
                            <cardinality>
<is_ordered>false</is_ordered>
<is_unique>false</is_unique>
<interval>
    <lower_included>true</lower_included>
    <upper_included>false</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>true</upper_unbounded>
    <lower>0</lower>
</interval>
                            </cardinality>
                        </attributes>
                    </children>
                </attributes>
            </children>
        </attributes>
        <attributes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="C_MULTIPLE_ATTRIBUTE">
            <rm_attribute_name>content</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_ARCHETYPE_ROOT">
                <rm_type_name>OBSERVATION</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>0</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0000</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>data</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>1</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>HISTORY</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id>at0001</node_id>
                        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                            <rm_attribute_name>events</rm_attribute_name>
                            <existence>
<lower_included>true</lower_included>
<upper_included>true</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>0</lower>
<upper>1</upper>
                            </existence>
                            <match_negated>false</match_negated>
                            <children xsi:type="C_COMPLEX_OBJECT">
<rm_type_name>POINT_EVENT</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>true</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>false</upper_unbounded>
    <lower>0</lower>
    <upper>1</upper>
</occurrences>
<node_id>at0002</node_id>
<attributes xsi:type="C_SINGLE_ATTRIBUTE">
    <rm_attribute_name>data</rm_attribute_name>
    <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>1</lower>
        <upper>1</upper>
    </existence>
    <match_negated>false</match_negated>
    <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>ITEM_TREE</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
        </occurrences>
        <node_id>at0003</node_id>
        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
            <rm_attribute_name>items</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>false</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>true</upper_unbounded>
                    <lower>0</lower>
                </occurrences>
                <node_id>at0004</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_QUANTITY">
                        <rm_type_name>DV_QUANTITY</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <property>
                            <terminology_id>
<value>openehr</value>
                            </terminology_id>
                            <code_string>128</code_string>
                        </property>
                        <list>
                            <magnitude>
<lower_included>true</lower_included>
<upper_included>false</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>0.0</lower>
<upper>200.0</upper>
                            </magnitude>
                            <units>a</units>
                        </list>
                    </children>
                </attributes>
            </children>
            <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                    <lower_included>true</lower_included>
                    <upper_included>false</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>true</upper_unbounded>
                    <lower>0</lower>
                </interval>
            </cardinality>
        </attributes>
    </children>
</attributes>
                            </children>
                            <cardinality>
<is_ordered>false</is_ordered>
<is_unique>false</is_unique>
<interval>
    <lower_included>true</lower_included>
    <upper_included>false</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>true</upper_unbounded>
    <lower>1</lower>
</interval>
                            </cardinality>
                        </attributes>
                    </children>
                </attributes>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>protocol</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ITEM_TREE</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id>at0008</node_id>
                        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                            <rm_attribute_name>items</rm_attribute_name>
                            <existence>
<lower_included>true</lower_included>
<upper_included>true</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>0</lower>
<upper>1</upper>
                            </existence>
                            <match_negated>false</match_negated>
                            <children xsi:type="ARCHETYPE_SLOT">
<rm_type_name>CLUSTER</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>false</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>true</upper_unbounded>
    <lower>0</lower>
</occurrences>
<node_id>at0009</node_id>
<includes>
    <string_expression>archetype_id/value matches {/.*/}</string_expression>
    <expression xsi:type="EXPR_BINARY_OPERATOR">
        <type>Boolean</type>
        <operator>2007</operator>
        <precedence_overridden>false</precedence_overridden>
        <left_operand xsi:type="EXPR_LEAF">
            <type>String</type>
            <item xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">archetype_id/value</item>
            <reference_type>attribute</reference_type>
        </left_operand>
        <right_operand xsi:type="EXPR_LEAF">
            <type>String</type>
            <item xsi:type="C_STRING">
                <pattern>.*</pattern>
            </item>
            <reference_type>constraint</reference_type>
        </right_operand>
    </expression>
</includes>
                            </children>
                            <cardinality>
<is_ordered>false</is_ordered>
<is_unique>false</is_unique>
<interval>
    <lower_included>true</lower_included>
    <upper_included>false</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>true</upper_unbounded>
    <lower>0</lower>
</interval>
                            </cardinality>
                        </attributes>
                    </children>
                </attributes>
                <archetype_id>
                    <value>openEHR-EHR-OBSERVATION.age_assertion.v1</value>
                </archetype_id>
                <term_definitions code="at0000">
                    <items id="text">Age assertion</items>
                    <items id="description">A statement about the age of an individual at a point in time.</items>
                </term_definitions>
                <term_definitions code="at0001">
                    <items id="text">Event Series</items>
                    <items id="description">@ internal @</items>
                </term_definitions>
                <term_definitions code="at0002">
                    <items id="text">Point in time event</items>
                    <items id="description">Default, unspecified point in time event which may be explicitly defined in a template or at run-time.</items>
                </term_definitions>
                <term_definitions code="at0003">
                    <items id="text">Tree</items>
                    <items id="description">@ internal @</items>
                </term_definitions>
                <term_definitions code="at0004">
                    <items id="text">Chronological age</items>
                    <items id="description">The age of an individual at the event time, calculated from date of birth.</items>
                    <items id="comment">In most use cases the DV_DURATION data type is used to record the Chronological age. The DV_INTERVAL_DURATION is used for recording a structured age interval in cases where there's uncertainty about the individual's exact age. The DV_QUANTITY data type is used for recording a decimal age in years or mean Julian years (365.25 days). The DV_TEXT data type is used for recording a textual representation of the individual's age, or age category often found in questionnaires. For example: 'P3M2W', '0,2884615384615385 a_j', '3 months 2 weeks' or '31-40 years' or 'Teenager'.</items>
                </term_definitions>
                <term_definitions code="at0005">
                    <items id="text">Adjusted age</items>
                    <items id="description">The age of a premature infant, calculated from their expected due date rather than their actual date of birth.</items>
                    <items id="comment">Also known as 'Corrected age'. In most use cases the DV_DURATION data type is used to record the Adjusted age. The DV_QUANTITY data type is used for recording a decimal age in years or mean Julian years (365.25 days), and the DV_TEXT data type is used for recording a textual representation of the individual's age. For example: 'P3M2W', '0,2884615384615385 a_j' or '3 months 2 weeks'.</items>
                </term_definitions>
                <term_definitions code="at0006">
                    <items id="text">Comment</items>
                    <items id="description">Additional narrative about the age of an individual, not captured in other fields.</items>
                </term_definitions>
                <term_definitions code="at0008">
                    <items id="text">Item tree</items>
                    <items id="description">@ internal @</items>
                </term_definitions>
                <term_definitions code="at0009">
                    <items id="text">Extension</items>
                    <items id="description">Additional information required to extend the model with local content or to align with other reference models or formalisms.</items>
                    <items id="comment">For example: local information requirements; or additional metadata to align with FHIR.</items>
                </term_definitions>
                <term_definitions code="a">
                    <items id="text">yr</items>
                    <items id="description">year</items>
                </term_definitions>
            </children>
            <children xsi:type="C_ARCHETYPE_ROOT">
                <rm_type_name>OBSERVATION</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>0</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0000</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>data</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>1</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>HISTORY</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id>at0001</node_id>
                        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                            <rm_attribute_name>events</rm_attribute_name>
                            <existence>
<lower_included>true</lower_included>
<upper_included>true</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>0</lower>
<upper>1</upper>
                            </existence>
                            <match_negated>false</match_negated>
                            <children xsi:type="C_COMPLEX_OBJECT">
<rm_type_name>POINT_EVENT</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>true</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>false</upper_unbounded>
    <lower>0</lower>
    <upper>1</upper>
</occurrences>
<node_id>at0002</node_id>
<attributes xsi:type="C_SINGLE_ATTRIBUTE">
    <rm_attribute_name>data</rm_attribute_name>
    <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>1</lower>
        <upper>1</upper>
    </existence>
    <match_negated>false</match_negated>
    <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>ITEM_TREE</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
        </occurrences>
        <node_id>at0003</node_id>
        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
            <rm_attribute_name>items</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0005</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0006</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0007</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0073</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0009</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0010</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0011</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0074</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0012</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0013</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0014</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0075</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0015</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0016</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0017</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0076</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0018</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0019</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0020</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0077</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0045</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0046</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0047</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0078</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0051</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0052</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0053</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0079</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0054</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0055</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0056</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0080</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0057</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0058</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0059</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0081</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0048</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0049</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0050</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0082</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0060</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0061</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0062</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0083</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0063</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0064</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0065</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0084</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0066</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0067</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0068</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0085</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0069</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>DV_COUNT</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                            <rm_attribute_name>magnitude</rm_attribute_name>
                            <existence>
<lower_included>true</lower_included>
<upper_included>true</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>1</lower>
<upper>1</upper>
                            </existence>
                            <match_negated>false</match_negated>
                            <children xsi:type="C_PRIMITIVE_OBJECT">
<rm_type_name>INTEGER</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>true</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>false</upper_unbounded>
    <lower>1</lower>
    <upper>1</upper>
</occurrences>
<node_id></node_id>
<item xsi:type="C_INTEGER">
    <range>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>0</lower>
        <upper>13</upper>
    </range>
</item>
                            </children>
                        </attributes>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>0</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0070</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>DV_TEXT</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                    </children>
                </attributes>
            </children>
            <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                    <lower_included>true</lower_included>
                    <upper_included>false</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>true</upper_unbounded>
                    <lower>0</lower>
                </interval>
            </cardinality>
        </attributes>
    </children>
</attributes>
<attributes xsi:type="C_SINGLE_ATTRIBUTE">
    <rm_attribute_name>name</rm_attribute_name>
    <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>1</lower>
        <upper>1</upper>
    </existence>
    <match_negated>false</match_negated>
    <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>DV_TEXT</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
        </occurrences>
        <node_id></node_id>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
            <rm_attribute_name>value</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>1</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_PRIMITIVE_OBJECT">
                <rm_type_name>STRING</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id></node_id>
                <item xsi:type="C_STRING">
                    <list>Point in time</list>
                </item>
            </children>
        </attributes>
    </children>
</attributes>
                            </children>
                            <children xsi:type="C_COMPLEX_OBJECT">
<rm_type_name>POINT_EVENT</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>true</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>false</upper_unbounded>
    <lower>0</lower>
    <upper>1</upper>
</occurrences>
<node_id>at0002</node_id>
<attributes xsi:type="C_SINGLE_ATTRIBUTE">
    <rm_attribute_name>data</rm_attribute_name>
    <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>1</lower>
        <upper>1</upper>
    </existence>
    <match_negated>false</match_negated>
    <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>ITEM_TREE</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
        </occurrences>
        <node_id>at0003</node_id>
        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
            <rm_attribute_name>items</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0005</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0006</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0007</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0073</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0009</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0010</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0011</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0074</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0012</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0013</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0014</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0075</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0015</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0016</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0017</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0076</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0018</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0019</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0020</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0077</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0045</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0046</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0047</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0078</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0051</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0052</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0053</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0079</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0054</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0055</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0056</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0080</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0057</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0058</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0059</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0081</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0048</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0049</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0050</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0082</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0060</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0061</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0062</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0083</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0063</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0064</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0065</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0084</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0066</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_DV_ORDINAL">
                        <rm_type_name>DV_ORDINAL</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <list>
                            <value>0</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0067</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>1</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0068</code_string>
</defining_code>
                            </symbol>
                        </list>
                        <list>
                            <value>99</value>
                            <symbol>
<defining_code>
    <terminology_id>
        <value>local</value>
    </terminology_id>
    <code_string>at0085</code_string>
</defining_code>
                            </symbol>
                        </list>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0069</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>DV_COUNT</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                            <rm_attribute_name>magnitude</rm_attribute_name>
                            <existence>
<lower_included>true</lower_included>
<upper_included>true</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>1</lower>
<upper>1</upper>
                            </existence>
                            <match_negated>false</match_negated>
                            <children xsi:type="C_PRIMITIVE_OBJECT">
<rm_type_name>INTEGER</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>true</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>false</upper_unbounded>
    <lower>1</lower>
    <upper>1</upper>
</occurrences>
<node_id></node_id>
<item xsi:type="C_INTEGER">
    <range>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>0</lower>
        <upper>13</upper>
    </range>
</item>
                            </children>
                        </attributes>
                    </children>
                </attributes>
            </children>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>ELEMENT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>0</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id>at0070</node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>DV_TEXT</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                    </children>
                </attributes>
            </children>
            <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                    <lower_included>true</lower_included>
                    <upper_included>false</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>true</upper_unbounded>
                    <lower>0</lower>
                </interval>
            </cardinality>
        </attributes>
    </children>
</attributes>
<attributes xsi:type="C_SINGLE_ATTRIBUTE">
    <rm_attribute_name>name</rm_attribute_name>
    <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>1</lower>
        <upper>1</upper>
    </existence>
    <match_negated>false</match_negated>
    <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>DV_TEXT</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
        </occurrences>
        <node_id></node_id>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
            <rm_attribute_name>value</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>1</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_PRIMITIVE_OBJECT">
                <rm_type_name>STRING</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id></node_id>
                <item xsi:type="C_STRING">
                    <list>Episode baseline</list>
                </item>
            </children>
        </attributes>
    </children>
</attributes>
                            </children>
                            <cardinality>
<is_ordered>false</is_ordered>
<is_unique>false</is_unique>
<interval>
    <lower_included>true</lower_included>
    <upper_included>false</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>true</upper_unbounded>
    <lower>1</lower>
</interval>
                            </cardinality>
                        </attributes>
                    </children>
                </attributes>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>protocol</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>0</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_COMPLEX_OBJECT">
                        <rm_type_name>ITEM_TREE</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id>at0004</node_id>
                        <attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
                            <rm_attribute_name>items</rm_attribute_name>
                            <existence>
<lower_included>true</lower_included>
<upper_included>true</upper_included>
<lower_unbounded>false</lower_unbounded>
<upper_unbounded>false</upper_unbounded>
<lower>0</lower>
<upper>1</upper>
                            </existence>
                            <match_negated>false</match_negated>
                            <children xsi:type="C_ARCHETYPE_ROOT">
<rm_type_name>CLUSTER</rm_type_name>
<occurrences>
    <lower_included>true</lower_included>
    <upper_included>true</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>false</upper_unbounded>
    <lower>0</lower>
    <upper>1</upper>
</occurrences>
<node_id>at0000</node_id>
<attributes xsi:type="C_MULTIPLE_ATTRIBUTE">
    <rm_attribute_name>items</rm_attribute_name>
    <existence>
        <lower_included>true</lower_included>
        <upper_included>true</upper_included>
        <lower_unbounded>false</lower_unbounded>
        <upper_unbounded>false</upper_unbounded>
        <lower>1</lower>
        <upper>1</upper>
    </existence>
    <match_negated>false</match_negated>
    <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>ELEMENT</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>1</lower>
            <upper>1</upper>
        </occurrences>
        <node_id>at0001</node_id>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
            <rm_attribute_name>value</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>DV_BOOLEAN</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id></node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>value</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>1</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_PRIMITIVE_OBJECT">
                        <rm_type_name>BOOLEAN</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>1</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <item xsi:type="C_BOOLEAN">
                            <true_valid>true</true_valid>
                            <false_valid>false</false_valid>
                        </item>
                    </children>
                </attributes>
            </children>
        </attributes>
    </children>
    <children xsi:type="C_COMPLEX_OBJECT">
        <rm_type_name>ELEMENT</rm_type_name>
        <occurrences>
            <lower_included>true</lower_included>
            <upper_included>true</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>false</upper_unbounded>
            <lower>0</lower>
            <upper>1</upper>
        </occurrences>
        <node_id>at0002</node_id>
        <attributes xsi:type="C_SINGLE_ATTRIBUTE">
            <rm_attribute_name>value</rm_attribute_name>
            <existence>
                <lower_included>true</lower_included>
                <upper_included>true</upper_included>
                <lower_unbounded>false</lower_unbounded>
                <upper_unbounded>false</upper_unbounded>
                <lower>0</lower>
                <upper>1</upper>
            </existence>
            <match_negated>false</match_negated>
            <children xsi:type="C_COMPLEX_OBJECT">
                <rm_type_name>DV_CODED_TEXT</rm_type_name>
                <occurrences>
                    <lower_included>true</lower_included>
                    <upper_included>true</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>false</upper_unbounded>
                    <lower>1</lower>
                    <upper>1</upper>
                </occurrences>
                <node_id></node_id>
                <attributes xsi:type="C_SINGLE_ATTRIBUTE">
                    <rm_attribute_name>defining_code</rm_attribute_name>
                    <existence>
                        <lower_included>true</lower_included>
                        <upper_included>true</upper_included>
                        <lower_unbounded>false</lower_unbounded>
                        <upper_unbounded>false</upper_unbounded>
                        <lower>1</lower>
                        <upper>1</upper>
                    </existence>
                    <match_negated>false</match_negated>
                    <children xsi:type="C_CODE_PHRASE">
                        <rm_type_name>CODE_PHRASE</rm_type_name>
                        <occurrences>
                            <lower_included>true</lower_included>
                            <upper_included>true</upper_included>
                            <lower_unbounded>false</lower_unbounded>
                            <upper_unbounded>false</upper_unbounded>
                            <lower>0</lower>
                            <upper>1</upper>
                        </occurrences>
                        <node_id></node_id>
                        <terminology_id>
                            <value>local_terms</value>
                        </terminology_id>
                        <code_list>patient_not_present</code_list>
                        <code_list>other</code_list>
                    </children>
                </attributes>
            </children>
        </attributes>
    </children>
    <cardinality>
        <is_ordered>false</is_ordered>
        <is_unique>false</is_unique>
        <interval>
            <lower_included>true</lower_included>
            <upper_included>false</upper_included>
            <lower_unbounded>false</lower_unbounded>
            <upper_unbounded>true</upper_unbounded>
            <lower>1</lower>
        </interval>
    </cardinality>
</attributes>
<archetype_id>
    <value>openEHR-EHR-CLUSTER.exclusion_exam.v1</value>
</archetype_id>
<template_id>
    <value>cistec.openehr.dos.v1</value>
</template_id>
<term_definitions code="at0000">
    <items id="text">Exclusion of examination</items>
    <items id="description">Positive statement to record that a physical examination or clinical test was not performed.</items>
</term_definitions>
<term_definitions code="at0001">
    <items id="text">Examination not done</items>
    <items id="description">Statement to explicity record that the examination was not performed.</items>
    <items id="comment">Record as True if the examination was not performed.</items>
</term_definitions>
<term_definitions code="at0002">
    <items id="text">Reason</items>
    <items id="description">Reason for the 'not done' statement.</items>
    <items id="comment">For example: patient factors, equipment factors, time constraints.</items>
</term_definitions>
<term_definitions code="local_terms::patient_not_present">
    <items id="text">Patient ist nicht anwesend</items>
</term_definitions>
<term_definitions code="local_terms::other">
    <items id="text">Anderes</items>
</term_definitions>
                            </children>
                            <cardinality>
<is_ordered>false</is_ordered>
<is_unique>false</is_unique>
<interval>
    <lower_included>true</lower_included>
    <upper_included>false</upper_included>
    <lower_unbounded>false</lower_unbounded>
    <upper_unbounded>true</upper_unbounded>
    <lower>0</lower>
</interval>
                            </cardinality>
                        </attributes>
                    </children>
                </attributes>
                <archetype_id>
                    <value>openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0</value>
                </archetype_id>
                <term_definitions code="at0001">
                    <items id="text">History</items>
                    <items id="description">@ internal @</items>
                </term_definitions>
                <term_definitions code="at0002">
                    <items id="text">Episode baseline</items>
                    <items id="description">@ internal @</items>
                </term_definitions>
                <term_definitions code="at0003">
                    <items id="text">Tree</items>
                    <items id="description">@ internal @</items>
                </term_definitions>
                <term_definitions code="at0004">
                    <items id="text">Item tree</items>
                    <items id="description">@ internal @</items>
                </term_definitions>
                <term_definitions code="at0005">
                    <items id="text">Dozes off</items>
                    <items id="description">Dozes off during conversation or activities.</items>
                </term_definitions>
                <term_definitions code="at0006">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0007">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0009">
                    <items id="text">Easily distracted</items>
                    <items id="description">Is easily distracted by stimuli from the environment.</items>
                </term_definitions>
                <term_definitions code="at0010">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0011">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0012">
                    <items id="text">Maintains attention</items>
                    <items id="description">Maintains attention to conversation or action.</items>
                </term_definitions>
                <term_definitions code="at0013">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0014">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0015">
                    <items id="text">Incomplete communication</items>
                    <items id="description">Does not finish question or answer.</items>
                </term_definitions>
                <term_definitions code="at0016">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0017">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0018">
                    <items id="text">Irrelevant responses</items>
                    <items id="description">Gives answers that do not fit the question.</items>
                </term_definitions>
                <term_definitions code="at0019">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0020">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0045">
                    <items id="text">Reacts slowly</items>
                    <items id="description">Reacts slowly to instructions.</items>
                </term_definitions>
                <term_definitions code="at0046">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0047">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0048">
                    <items id="text">Agitated</items>
                    <items id="description">Is picking, disorderly, restless.</items>
                </term_definitions>
                <term_definitions code="at0049">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0050">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0051">
                    <items id="text">Spatially disorientated</items>
                    <items id="description">Thinks to be somewhere else.</items>
                </term_definitions>
                <term_definitions code="at0052">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0053">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0054">
                    <items id="text">Temporal awareness</items>
                    <items id="description">Knows which part of the day it is.</items>
                </term_definitions>
                <term_definitions code="at0055">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0056">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0057">
                    <items id="text">Recent recall</items>
                    <items id="description">Remembers recent event.</items>
                </term_definitions>
                <term_definitions code="at0058">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0059">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0060">
                    <items id="text">Pulls accesses</items>
                    <items id="description">Pulls ivtubes, feeding tubes, catheters etc.</items>
                </term_definitions>
                <term_definitions code="at0061">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0062">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0063">
                    <items id="text">Emotionally volatile</items>
                    <items id="description">Is easy or sudden emotional.</items>
                </term_definitions>
                <term_definitions code="at0064">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0065">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0066">
                    <items id="text">Hallucinates</items>
                    <items id="description">Sees/hears things which are not there.</items>
                </term_definitions>
                <term_definitions code="at0067">
                    <items id="text">never</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed</items>
                </term_definitions>
                <term_definitions code="at0068">
                    <items id="text">sometimes - always</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time</items>
                </term_definitions>
                <term_definitions code="at0069">
                    <items id="text">Score</items>
                    <items id="description">Total score per shift.</items>
                </term_definitions>
                <term_definitions code="at0070">
                    <items id="text">Comment</items>
                    <items id="description"></items>
                </term_definitions>
                <term_definitions code="at0072">
                    <items id="text">Extension</items>
                    <items id="description"></items>
                </term_definitions>
                <term_definitions code="at0073">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0074">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0075">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0076">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0077">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0078">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0079">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0080">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0081">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0082">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0083">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0084">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0085">
                    <items id="text">unable</items>
                    <items id="description">During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior</items>
                </term_definitions>
                <term_definitions code="at0000">
                    <items id="text">delirium_observation_screening_scale</items>
                    <items id="description">Delirium Observation Screening Scale DOS</items>
                </term_definitions>
            </children>
            <cardinality>
                <is_ordered>false</is_ordered>
                <is_unique>false</is_unique>
                <interval>
                    <lower_included>true</lower_included>
                    <upper_included>false</upper_included>
                    <lower_unbounded>false</lower_unbounded>
                    <upper_unbounded>true</upper_unbounded>
                    <lower>1</lower>
                </interval>
            </cardinality>
        </attributes>
        <archetype_id>
            <value>openEHR-EHR-COMPOSITION.encounter.v1</value>
        </archetype_id>
        <template_id>
            <value>cistec.openehr.dos.v1</value>
        </template_id>
        <term_definitions code="at0000">
            <items id="text">DOS</items>
            <items id="description">Interaction, contact or care event between a subject of care and healthcare provider(s).</items>
        </term_definitions>
        <term_definitions code="at0001">
            <items id="text">Tree</items>
            <items id="description">@ internal @</items>
        </term_definitions>
        <term_definitions code="at0002">
            <items id="text">Extension</items>
            <items id="description">Additional information required to capture local context or to align with other reference models/formalisms.</items>
            <items id="comment">e.g. Local hospital departmental infomation or additional metadata to align with FHIR or CIMI equivalents.</items>
        </term_definitions>
    </definition>
</template>
```

</ScrollableCode>

---

# Operational Templates in Practice

<v-clicks>

* Used by EHR systems to:
  + Generate user interfaces
  + Validate incoming data
  + Guide data storage and retrieval
* Enable consistent implementation across different systems
* Facilitate semantic interoperability
* Support versioning of templates

</v-clicks>

---
layout: statement
---

# Web Templates

Simplifying OpenEHR for Web Development

---

# Understanding Web Templates
* JSON representation of Operational Templates
* Designed for easy consumption by web applications
* Simplify frontend development for OpenEHR-based systems

<v-click>

## Key Benefits:

* Easier to parse and use in JavaScript
* More compact than full XML Operational Templates
* Can be directly used to generate dynamic forms
* **Note: This is the work currently being undertaken in the K6 Scores project.**

</v-click>

---

# Example Web Template Structure

<ScrollableCode>

```json
{
  "templateId": "cistec.openehr.dos.v1",
  "version": "2.3",
  "defaultLanguage": "en",
  "languages": [
    "en"
  ],
  "tree": {
    "id": "dos",
    "name": "DOS",
    "localizedName": "DOS",
    "rmType": "COMPOSITION",
    "nodeId": "openEHR-EHR-COMPOSITION.encounter.v1",
    "min": 1,
    "max": 1,
    "localizedNames": {
      "en": "DOS"
    },
    "localizedDescriptions": {
      "en": "Interaction, contact or care event between a subject of care and healthcare provider(s)."
    },
    "children": [
      {
        "id": "category",
        "name": "category",
        "localizedName": "category",
        "rmType": "DV_CODED_TEXT",
        "min": 1,
        "max": 1,
        "aqlPath": "/category",
        "children": [
          {
            "id": "defining_code",
            "name": "defining_code",
            "localizedName": "defining_code",
            "rmType": "CODE_PHRASE",
            "min": 1,
            "max": 1,
            "aqlPath": "/category/defining_code",
            "inputs": [
              {
                "suffix": "code",
                "type": "CODED_TEXT",
                "list": [
                  {
                    "value": "433",
                    "label": "event",
                    "localizedLabels": {
                      "en": "event"
                    }
                  }
                ],
                "terminology": "openehr"
              }
            ]
          }
        ],
        "inputs": [
          {
            "suffix": "code",
            "type": "CODED_TEXT",
            "list": [
              {
                "value": "433",
                "label": "event",
                "localizedLabels": {
                  "en": "event"
                }
              }
            ],
            "terminology": "openehr"
          }
        ],
        "inContext": true
      },
      {
        "id": "context",
        "name": "context",
        "localizedName": "context",
        "rmType": "EVENT_CONTEXT",
        "min": 1,
        "max": 1,
        "aqlPath": "/context",
        "children": [
          {
            "id": "tree",
            "name": "Tree",
            "localizedName": "Tree",
            "rmType": "ITEM_TREE",
            "nodeId": "at0001",
            "min": 1,
            "max": 1,
            "localizedNames": {
              "en": "Tree"
            },
            "localizedDescriptions": {
              "en": "@ internal @"
            },
            "aqlPath": "/context/other_context[at0001]",
            "children": [
              {
                "id": "extension",
                "name": "Extension",
                "localizedName": "Extension",
                "rmType": "CLUSTER",
                "nodeId": "at0002",
                "min": 0,
                "max": -1,
                "localizedNames": {
                  "en": "Extension"
                },
                "localizedDescriptions": {
                  "en": "Additional information required to capture local context or to align with other reference models/formalisms."
                },
                "aqlPath": "/context/other_context[at0001]/items[at0002]",
                "annotations": {
                  "comment": "e.g. Local hospital departmental infomation or additional metadata to align with FHIR or CIMI equivalents."
                }
              },
              {
                "id": "uid",
                "name": "uid",
                "rmType": "UID_BASED_ID",
                "min": 0,
                "max": 1,
                "aqlPath": "/context/other_context[at0001]/uid",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "archetype_details",
                "name": "archetype_details",
                "rmType": "ARCHETYPED",
                "min": 0,
                "max": 1,
                "aqlPath": "/context/other_context[at0001]/archetype_details"
              },
              {
                "id": "archetype_node_id",
                "name": "archetype_node_id",
                "rmType": "STRING",
                "min": 1,
                "max": 1,
                "aqlPath": "/context/other_context[at0001]/archetype_node_id",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "name",
                "name": "name",
                "rmType": "DV_TEXT",
                "min": 1,
                "max": 1,
                "aqlPath": "/context/other_context[at0001]/name",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "feeder_audit",
                "name": "feeder_audit",
                "rmType": "FEEDER_AUDIT",
                "min": 0,
                "max": 1,
                "aqlPath": "/context/other_context[at0001]/feeder_audit"
              },
              {
                "id": "links",
                "name": "links",
                "rmType": "LINK",
                "min": 0,
                "max": -1,
                "aqlPath": "/context/other_context[at0001]/links"
              }
            ]
          },
          {
            "id": "start_time",
            "name": "start_time",
            "rmType": "DV_DATE_TIME",
            "min": 1,
            "max": 1,
            "aqlPath": "/context/start_time",
            "inputs": [
              {
                "type": "DATETIME"
              }
            ],
            "inContext": true
          },
          {
            "id": "participations",
            "name": "participations",
            "rmType": "PARTICIPATION",
            "min": 0,
            "max": -1,
            "aqlPath": "/context/participations",
            "inContext": true
          },
          {
            "id": "end_time",
            "name": "end_time",
            "rmType": "DV_DATE_TIME",
            "min": 0,
            "max": 1,
            "aqlPath": "/context/end_time",
            "inputs": [
              {
                "type": "DATETIME"
              }
            ],
            "inContext": true
          },
          {
            "id": "location",
            "name": "location",
            "rmType": "STRING",
            "min": 0,
            "max": 1,
            "aqlPath": "/context/location",
            "inputs": [
              {
                "type": "TEXT"
              }
            ],
            "inContext": true
          },
          {
            "id": "health_care_facility",
            "name": "health_care_facility",
            "rmType": "PARTY_IDENTIFIED",
            "min": 0,
            "max": 1,
            "aqlPath": "/context/health_care_facility"
          },
          {
            "id": "setting",
            "name": "setting",
            "rmType": "DV_CODED_TEXT",
            "min": 1,
            "max": 1,
            "aqlPath": "/context/setting",
            "inputs": [
              {
                "suffix": "code",
                "type": "TEXT"
              },
              {
                "suffix": "value",
                "type": "TEXT"
              }
            ],
            "inContext": true
          }
        ],
        "cardinalities": [
          {
            "min": 0,
            "max": 1,
            "ids": [
              "tree"
            ],
            "excludeFromWebTemplate": true
          }
        ]
      },
      {
        "id": "age_assertion",
        "name": "Age assertion",
        "localizedName": "Age assertion",
        "rmType": "OBSERVATION",
        "nodeId": "openEHR-EHR-OBSERVATION.age_assertion.v1",
        "min": 0,
        "max": 1,
        "localizedNames": {
          "en": "Age assertion"
        },
        "localizedDescriptions": {
          "en": "A statement about the age of an individual at a point in time."
        },
        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]",
        "children": [
          {
            "id": "event_series",
            "name": "Event Series",
            "localizedName": "Event Series",
            "rmType": "HISTORY",
            "nodeId": "at0001",
            "min": 1,
            "max": 1,
            "localizedNames": {
              "en": "Event Series"
            },
            "localizedDescriptions": {
              "en": "@ internal @"
            },
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]",
            "children": [
              {
                "id": "point_in_time_event",
                "name": "Point in time event",
                "localizedName": "Point in time event",
                "rmType": "POINT_EVENT",
                "nodeId": "at0002",
                "min": 0,
                "max": 1,
                "localizedNames": {
                  "en": "Point in time event"
                },
                "localizedDescriptions": {
                  "en": "Default, unspecified point in time event which may be explicitly defined in a template or at run-time."
                },
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]",
                "children": [
                  {
                    "id": "tree",
                    "name": "Tree",
                    "localizedName": "Tree",
                    "rmType": "ITEM_TREE",
                    "nodeId": "at0003",
                    "min": 1,
                    "max": 1,
                    "localizedNames": {
                      "en": "Tree"
                    },
                    "localizedDescriptions": {
                      "en": "@ internal @"
                    },
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]",
                    "children": [
                      {
                        "id": "chronological_age",
                        "name": "Chronological age",
                        "localizedName": "Chronological age",
                        "rmType": "ELEMENT",
                        "nodeId": "at0004",
                        "min": 0,
                        "max": -1,
                        "localizedNames": {
                          "en": "Chronological age"
                        },
                        "localizedDescriptions": {
                          "en": "The age of an individual at the event time, calculated from date of birth."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0004]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Chronological age",
                            "localizedName": "Chronological age",
                            "rmType": "DV_QUANTITY",
                            "nodeId": "at0004",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Chronological age"
                            },
                            "localizedDescriptions": {
                              "en": "The age of an individual at the event time, calculated from date of birth."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value",
                            "inputs": [
                              {
                                "suffix": "magnitude",
                                "type": "DECIMAL",
                                "validation": {
                                  "range": {
                                    "min": 0,
                                    "minOp": ">=",
                                    "max": 200,
                                    "maxOp": "<"
                                  }
                                }
                              },
                              {
                                "suffix": "unit",
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "a",
                                    "label": "a",
                                    "localizedLabels": {
                                      "en": "yr"
                                    },
                                    "validation": {
                                      "range": {
                                        "min": 0,
                                        "minOp": ">=",
                                        "max": 200,
                                        "maxOp": "<"
                                      }
                                    }
                                  }
                                ]
                              }
                            ],
                            "annotations": {
                              "comment": "In most use cases the DV_DURATION data type is used to record the Chronological age. The DV_INTERVAL_DURATION is used for recording a structured age interval in cases where there's uncertainty about the individual's exact age. The DV_QUANTITY data type is used for recording a decimal age in years or mean Julian years (365.25 days). The DV_TEXT data type is used for recording a textual representation of the individual's age, or age category often found in questionnaires. For example: 'P3M2W', '0,2884615384615385 a_j', '3 months 2 weeks' or '31-40 years' or 'Teenager'."
                            }
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0004]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0004]/feeder_audit"
                          }
                        ],
                        "annotations": {
                          "comment": "In most use cases the DV_DURATION data type is used to record the Chronological age. The DV_INTERVAL_DURATION is used for recording a structured age interval in cases where there's uncertainty about the individual's exact age. The DV_QUANTITY data type is used for recording a decimal age in years or mean Julian years (365.25 days). The DV_TEXT data type is used for recording a textual representation of the individual's age, or age category often found in questionnaires. For example: 'P3M2W', '0,2884615384615385 a_j', '3 months 2 weeks' or '31-40 years' or 'Teenager'."
                        },
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "uid",
                        "name": "uid",
                        "rmType": "UID_BASED_ID",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/uid",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "archetype_details",
                        "name": "archetype_details",
                        "rmType": "ARCHETYPED",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/archetype_details"
                      },
                      {
                        "id": "archetype_node_id",
                        "name": "archetype_node_id",
                        "rmType": "STRING",
                        "min": 1,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/archetype_node_id",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "name",
                        "name": "name",
                        "rmType": "DV_TEXT",
                        "min": 1,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/name",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "feeder_audit",
                        "name": "feeder_audit",
                        "rmType": "FEEDER_AUDIT",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/feeder_audit"
                      },
                      {
                        "id": "links",
                        "name": "links",
                        "rmType": "LINK",
                        "min": 0,
                        "max": -1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/data[at0003]/links"
                      }
                    ]
                  },
                  {
                    "id": "uid",
                    "name": "uid",
                    "rmType": "UID_BASED_ID",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/uid",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "archetype_details",
                    "name": "archetype_details",
                    "rmType": "ARCHETYPED",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/archetype_details"
                  },
                  {
                    "id": "archetype_node_id",
                    "name": "archetype_node_id",
                    "rmType": "STRING",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/archetype_node_id",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "name",
                    "name": "name",
                    "rmType": "DV_TEXT",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/name",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "feeder_audit",
                    "name": "feeder_audit",
                    "rmType": "FEEDER_AUDIT",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/feeder_audit"
                  },
                  {
                    "id": "links",
                    "name": "links",
                    "rmType": "LINK",
                    "min": 0,
                    "max": -1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/links"
                  },
                  {
                    "id": "time",
                    "name": "time",
                    "rmType": "DV_DATE_TIME",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/events[at0002]/time",
                    "inputs": [
                      {
                        "type": "DATETIME"
                      }
                    ],
                    "inContext": true
                  }
                ]
              },
              {
                "id": "duration",
                "name": "duration",
                "rmType": "DV_DURATION",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/duration",
                "inputs": [
                  {
                    "suffix": "year",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "month",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "day",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "week",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "hour",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "minute",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "second",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  }
                ]
              },
              {
                "id": "uid",
                "name": "uid",
                "rmType": "UID_BASED_ID",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/uid",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "period",
                "name": "period",
                "rmType": "DV_DURATION",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/period",
                "inputs": [
                  {
                    "suffix": "year",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "month",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "day",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "week",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "hour",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "minute",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "second",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  }
                ]
              },
              {
                "id": "archetype_details",
                "name": "archetype_details",
                "rmType": "ARCHETYPED",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/archetype_details"
              },
              {
                "id": "archetype_node_id",
                "name": "archetype_node_id",
                "rmType": "STRING",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/archetype_node_id",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "origin",
                "name": "origin",
                "rmType": "DV_DATE_TIME",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/origin",
                "inputs": [
                  {
                    "type": "DATETIME"
                  }
                ],
                "inContext": true
              },
              {
                "id": "name",
                "name": "name",
                "rmType": "DV_TEXT",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/name",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "feeder_audit",
                "name": "feeder_audit",
                "rmType": "FEEDER_AUDIT",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/feeder_audit"
              },
              {
                "id": "links",
                "name": "links",
                "rmType": "LINK",
                "min": 0,
                "max": -1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/data[at0001]/links"
              }
            ]
          },
          {
            "id": "item_tree",
            "name": "Item tree",
            "localizedName": "Item tree",
            "rmType": "ITEM_TREE",
            "nodeId": "at0008",
            "min": 1,
            "max": 1,
            "localizedNames": {
              "en": "Item tree"
            },
            "localizedDescriptions": {
              "en": "@ internal @"
            },
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]",
            "children": [
              {
                "id": "extension",
                "name": "Extension",
                "localizedName": "Extension",
                "rmType": "CLUSTER",
                "nodeId": "at0009",
                "min": 0,
                "max": -1,
                "localizedNames": {
                  "en": "Extension"
                },
                "localizedDescriptions": {
                  "en": "Additional information required to extend the model with local content or to align with other reference models or formalisms."
                },
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]/items[at0009]",
                "annotations": {
                  "comment": "For example: local information requirements; or additional metadata to align with FHIR."
                }
              },
              {
                "id": "uid",
                "name": "uid",
                "rmType": "UID_BASED_ID",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]/uid",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "archetype_details",
                "name": "archetype_details",
                "rmType": "ARCHETYPED",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]/archetype_details"
              },
              {
                "id": "archetype_node_id",
                "name": "archetype_node_id",
                "rmType": "STRING",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]/archetype_node_id",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "name",
                "name": "name",
                "rmType": "DV_TEXT",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]/name",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "feeder_audit",
                "name": "feeder_audit",
                "rmType": "FEEDER_AUDIT",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]/feeder_audit"
              },
              {
                "id": "links",
                "name": "links",
                "rmType": "LINK",
                "min": 0,
                "max": -1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/protocol[at0008]/links"
              }
            ]
          },
          {
            "id": "workflow_id",
            "name": "workflow_id",
            "rmType": "OBJECT_REF",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/workflow_id"
          },
          {
            "id": "archetype_node_id",
            "name": "archetype_node_id",
            "rmType": "STRING",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/archetype_node_id",
            "inputs": [
              {
                "type": "TEXT"
              }
            ]
          },
          {
            "id": "subject",
            "name": "subject",
            "rmType": "PARTY_PROXY",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/subject",
            "inputs": [
              {
                "suffix": "id",
                "type": "TEXT"
              },
              {
                "suffix": "id_scheme",
                "type": "TEXT"
              },
              {
                "suffix": "id_namespace",
                "type": "TEXT"
              },
              {
                "suffix": "name",
                "type": "TEXT"
              }
            ],
            "inContext": true
          },
          {
            "id": "language",
            "name": "language",
            "rmType": "CODE_PHRASE",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/language",
            "inContext": true
          },
          {
            "id": "encoding",
            "name": "encoding",
            "rmType": "CODE_PHRASE",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/encoding",
            "inContext": true
          },
          {
            "id": "uid",
            "name": "uid",
            "rmType": "UID_BASED_ID",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/uid",
            "inputs": [
              {
                "type": "TEXT"
              }
            ]
          },
          {
            "id": "guideline_id",
            "name": "guideline_id",
            "rmType": "OBJECT_REF",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/guideline_id"
          },
          {
            "id": "archetype_details",
            "name": "archetype_details",
            "rmType": "ARCHETYPED",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/archetype_details"
          },
          {
            "id": "provider",
            "name": "provider",
            "rmType": "PARTY_PROXY",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/provider",
            "inputs": [
              {
                "suffix": "id",
                "type": "TEXT"
              },
              {
                "suffix": "id_scheme",
                "type": "TEXT"
              },
              {
                "suffix": "id_namespace",
                "type": "TEXT"
              },
              {
                "suffix": "name",
                "type": "TEXT"
              }
            ],
            "inContext": true
          },
          {
            "id": "name",
            "name": "name",
            "rmType": "DV_TEXT",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/name",
            "inputs": [
              {
                "type": "TEXT"
              }
            ]
          },
          {
            "id": "feeder_audit",
            "name": "feeder_audit",
            "rmType": "FEEDER_AUDIT",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/feeder_audit"
          },
          {
            "id": "links",
            "name": "links",
            "rmType": "LINK",
            "min": 0,
            "max": -1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/links"
          },
          {
            "id": "other_participations",
            "name": "other_participations",
            "rmType": "PARTICIPATION",
            "min": 0,
            "max": -1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.age_assertion.v1]/other_participations",
            "inContext": true
          }
        ],
        "cardinalities": [
          {
            "min": 0,
            "max": 1,
            "ids": [
              "item_tree"
            ],
            "excludeFromWebTemplate": true
          }
        ]
      },
      {
        "id": "delirium_observation_screening_scale",
        "name": "delirium_observation_screening_scale",
        "localizedName": "delirium_observation_screening_scale",
        "rmType": "OBSERVATION",
        "nodeId": "openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0",
        "min": 0,
        "max": 1,
        "localizedNames": {
          "en": "delirium_observation_screening_scale"
        },
        "localizedDescriptions": {
          "en": "Delirium Observation Screening Scale DOS"
        },
        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]",
        "children": [
          {
            "id": "history",
            "name": "History",
            "localizedName": "History",
            "rmType": "HISTORY",
            "nodeId": "at0001",
            "min": 1,
            "max": 1,
            "localizedNames": {
              "en": "History"
            },
            "localizedDescriptions": {
              "en": "@ internal @"
            },
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]",
            "children": [
              {
                "id": "point_in_time",
                "name": "Point in time",
                "localizedName": "Point in time",
                "rmType": "POINT_EVENT",
                "nodeId": "at0002",
                "min": 0,
                "max": 1,
                "localizedNames": {
                  "en": "Point in time"
                },
                "localizedDescriptions": {
                  "en": "@ internal @"
                },
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']",
                "children": [
                  {
                    "id": "tree",
                    "name": "Tree",
                    "localizedName": "Tree",
                    "rmType": "ITEM_TREE",
                    "nodeId": "at0003",
                    "min": 1,
                    "max": 1,
                    "localizedNames": {
                      "en": "Tree"
                    },
                    "localizedDescriptions": {
                      "en": "@ internal @"
                    },
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]",
                    "children": [
                      {
                        "id": "dozes_off",
                        "name": "Dozes off",
                        "localizedName": "Dozes off",
                        "rmType": "ELEMENT",
                        "nodeId": "at0005",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Dozes off"
                        },
                        "localizedDescriptions": {
                          "en": "Dozes off during conversation or activities."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0005]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Dozes off",
                            "localizedName": "Dozes off",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0005",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Dozes off"
                            },
                            "localizedDescriptions": {
                              "en": "Dozes off during conversation or activities."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0005]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0006",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0007",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0073",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0005]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0005]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "easily_distracted",
                        "name": "Easily distracted",
                        "localizedName": "Easily distracted",
                        "rmType": "ELEMENT",
                        "nodeId": "at0009",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Easily distracted"
                        },
                        "localizedDescriptions": {
                          "en": "Is easily distracted by stimuli from the environment."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0009]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Easily distracted",
                            "localizedName": "Easily distracted",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0009",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Easily distracted"
                            },
                            "localizedDescriptions": {
                              "en": "Is easily distracted by stimuli from the environment."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0009]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0010",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0011",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0074",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0009]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0009]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "maintains_attention",
                        "name": "Maintains attention",
                        "localizedName": "Maintains attention",
                        "rmType": "ELEMENT",
                        "nodeId": "at0012",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Maintains attention"
                        },
                        "localizedDescriptions": {
                          "en": "Maintains attention to conversation or action."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0012]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Maintains attention",
                            "localizedName": "Maintains attention",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0012",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Maintains attention"
                            },
                            "localizedDescriptions": {
                              "en": "Maintains attention to conversation or action."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0012]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0013",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0014",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0075",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0012]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0012]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "incomplete_communication",
                        "name": "Incomplete communication",
                        "localizedName": "Incomplete communication",
                        "rmType": "ELEMENT",
                        "nodeId": "at0015",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Incomplete communication"
                        },
                        "localizedDescriptions": {
                          "en": "Does not finish question or answer."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0015]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Incomplete communication",
                            "localizedName": "Incomplete communication",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0015",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Incomplete communication"
                            },
                            "localizedDescriptions": {
                              "en": "Does not finish question or answer."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0015]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0016",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0017",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0076",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0015]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0015]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "irrelevant_responses",
                        "name": "Irrelevant responses",
                        "localizedName": "Irrelevant responses",
                        "rmType": "ELEMENT",
                        "nodeId": "at0018",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Irrelevant responses"
                        },
                        "localizedDescriptions": {
                          "en": "Gives answers that do not fit the question."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0018]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Irrelevant responses",
                            "localizedName": "Irrelevant responses",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0018",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Irrelevant responses"
                            },
                            "localizedDescriptions": {
                              "en": "Gives answers that do not fit the question."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0018]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0019",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0020",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0077",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0018]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0018]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "reacts_slowly",
                        "name": "Reacts slowly",
                        "localizedName": "Reacts slowly",
                        "rmType": "ELEMENT",
                        "nodeId": "at0045",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Reacts slowly"
                        },
                        "localizedDescriptions": {
                          "en": "Reacts slowly to instructions."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0045]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Reacts slowly",
                            "localizedName": "Reacts slowly",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0045",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Reacts slowly"
                            },
                            "localizedDescriptions": {
                              "en": "Reacts slowly to instructions."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0045]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0046",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0047",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0078",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0045]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0045]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "spatially_disorientated",
                        "name": "Spatially disorientated",
                        "localizedName": "Spatially disorientated",
                        "rmType": "ELEMENT",
                        "nodeId": "at0051",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Spatially disorientated"
                        },
                        "localizedDescriptions": {
                          "en": "Thinks to be somewhere else."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0051]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Spatially disorientated",
                            "localizedName": "Spatially disorientated",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0051",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Spatially disorientated"
                            },
                            "localizedDescriptions": {
                              "en": "Thinks to be somewhere else."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0051]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0052",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0053",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0079",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0051]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0051]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "temporal_awareness",
                        "name": "Temporal awareness",
                        "localizedName": "Temporal awareness",
                        "rmType": "ELEMENT",
                        "nodeId": "at0054",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Temporal awareness"
                        },
                        "localizedDescriptions": {
                          "en": "Knows which part of the day it is."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0054]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Temporal awareness",
                            "localizedName": "Temporal awareness",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0054",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Temporal awareness"
                            },
                            "localizedDescriptions": {
                              "en": "Knows which part of the day it is."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0054]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0055",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0056",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0080",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0054]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0054]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "recent_recall",
                        "name": "Recent recall",
                        "localizedName": "Recent recall",
                        "rmType": "ELEMENT",
                        "nodeId": "at0057",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Recent recall"
                        },
                        "localizedDescriptions": {
                          "en": "Remembers recent event."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0057]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Recent recall",
                            "localizedName": "Recent recall",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0057",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Recent recall"
                            },
                            "localizedDescriptions": {
                              "en": "Remembers recent event."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0057]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0058",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0059",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0081",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0057]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0057]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "agitated",
                        "name": "Agitated",
                        "localizedName": "Agitated",
                        "rmType": "ELEMENT",
                        "nodeId": "at0048",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Agitated"
                        },
                        "localizedDescriptions": {
                          "en": "Is picking, disorderly, restless."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0048]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Agitated",
                            "localizedName": "Agitated",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0048",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Agitated"
                            },
                            "localizedDescriptions": {
                              "en": "Is picking, disorderly, restless."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0048]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0049",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0050",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0082",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0048]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0048]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "pulls_accesses",
                        "name": "Pulls accesses",
                        "localizedName": "Pulls accesses",
                        "rmType": "ELEMENT",
                        "nodeId": "at0060",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Pulls accesses"
                        },
                        "localizedDescriptions": {
                          "en": "Pulls ivtubes, feeding tubes, catheters etc."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0060]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Pulls accesses",
                            "localizedName": "Pulls accesses",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0060",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Pulls accesses"
                            },
                            "localizedDescriptions": {
                              "en": "Pulls ivtubes, feeding tubes, catheters etc."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0060]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0061",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0062",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0083",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0060]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0060]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "emotionally_volatile",
                        "name": "Emotionally volatile",
                        "localizedName": "Emotionally volatile",
                        "rmType": "ELEMENT",
                        "nodeId": "at0063",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Emotionally volatile"
                        },
                        "localizedDescriptions": {
                          "en": "Is easy or sudden emotional."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0063]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Emotionally volatile",
                            "localizedName": "Emotionally volatile",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0063",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Emotionally volatile"
                            },
                            "localizedDescriptions": {
                              "en": "Is easy or sudden emotional."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0063]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0064",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0065",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0084",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0063]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0063]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "hallucinates",
                        "name": "Hallucinates",
                        "localizedName": "Hallucinates",
                        "rmType": "ELEMENT",
                        "nodeId": "at0066",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Hallucinates"
                        },
                        "localizedDescriptions": {
                          "en": "Sees/hears things which are not there."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0066]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Hallucinates",
                            "localizedName": "Hallucinates",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0066",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Hallucinates"
                            },
                            "localizedDescriptions": {
                              "en": "Sees/hears things which are not there."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0066]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0067",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0068",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0085",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0066]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0066]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "score",
                        "name": "Score",
                        "localizedName": "Score",
                        "rmType": "ELEMENT",
                        "nodeId": "at0069",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Score"
                        },
                        "localizedDescriptions": {
                          "en": "Total score per shift."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0069]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Score",
                            "localizedName": "Score",
                            "rmType": "DV_COUNT",
                            "nodeId": "at0069",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Score"
                            },
                            "localizedDescriptions": {
                              "en": "Total score per shift."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0069]/value",
                            "inputs": [
                              {
                                "type": "INTEGER",
                                "validation": {
                                  "range": {
                                    "min": 0,
                                    "minOp": ">=",
                                    "max": 13,
                                    "maxOp": "<="
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0069]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0069]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "comment",
                        "name": "Comment",
                        "localizedName": "Comment",
                        "rmType": "ELEMENT",
                        "nodeId": "at0070",
                        "min": 0,
                        "max": 1,
                        "localizedNames": {
                          "en": "Comment"
                        },
                        "localizedDescriptions": {
                          "en": ""
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0070]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Comment",
                            "localizedName": "Comment",
                            "rmType": "DV_TEXT",
                            "nodeId": "at0070",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Comment"
                            },
                            "localizedDescriptions": {
                              "en": ""
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0070]/value",
                            "inputs": [
                              {
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0070]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/items[at0070]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "uid",
                        "name": "uid",
                        "rmType": "UID_BASED_ID",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/uid",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "archetype_details",
                        "name": "archetype_details",
                        "rmType": "ARCHETYPED",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/archetype_details"
                      },
                      {
                        "id": "archetype_node_id",
                        "name": "archetype_node_id",
                        "rmType": "STRING",
                        "min": 1,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/archetype_node_id",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "name",
                        "name": "name",
                        "rmType": "DV_TEXT",
                        "min": 1,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/name",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "feeder_audit",
                        "name": "feeder_audit",
                        "rmType": "FEEDER_AUDIT",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/feeder_audit"
                      },
                      {
                        "id": "links",
                        "name": "links",
                        "rmType": "LINK",
                        "min": 0,
                        "max": -1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/data[at0003]/links"
                      }
                    ]
                  },
                  {
                    "id": "name",
                    "name": "name",
                    "localizedName": "name",
                    "rmType": "DV_TEXT",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/name",
                    "inputs": [
                      {
                        "type": "TEXT",
                        "list": [
                          {
                            "value": "Point in time",
                            "label": "Point in time"
                          }
                        ],
                        "listOpen": false
                      }
                    ]
                  },
                  {
                    "id": "uid",
                    "name": "uid",
                    "rmType": "UID_BASED_ID",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/uid",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "archetype_details",
                    "name": "archetype_details",
                    "rmType": "ARCHETYPED",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/archetype_details"
                  },
                  {
                    "id": "archetype_node_id",
                    "name": "archetype_node_id",
                    "rmType": "STRING",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/archetype_node_id",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "feeder_audit",
                    "name": "feeder_audit",
                    "rmType": "FEEDER_AUDIT",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/feeder_audit"
                  },
                  {
                    "id": "links",
                    "name": "links",
                    "rmType": "LINK",
                    "min": 0,
                    "max": -1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/links"
                  },
                  {
                    "id": "time",
                    "name": "time",
                    "rmType": "DV_DATE_TIME",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Point in time']/time",
                    "inputs": [
                      {
                        "type": "DATETIME"
                      }
                    ],
                    "inContext": true
                  }
                ]
              },
              {
                "id": "episode_baseline",
                "name": "Episode baseline",
                "localizedName": "Episode baseline",
                "rmType": "POINT_EVENT",
                "nodeId": "at0002",
                "min": 0,
                "max": 1,
                "localizedNames": {
                  "en": "Episode baseline"
                },
                "localizedDescriptions": {
                  "en": "@ internal @"
                },
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']",
                "children": [
                  {
                    "id": "tree",
                    "name": "Tree",
                    "localizedName": "Tree",
                    "rmType": "ITEM_TREE",
                    "nodeId": "at0003",
                    "min": 1,
                    "max": 1,
                    "localizedNames": {
                      "en": "Tree"
                    },
                    "localizedDescriptions": {
                      "en": "@ internal @"
                    },
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]",
                    "children": [
                      {
                        "id": "dozes_off",
                        "name": "Dozes off",
                        "localizedName": "Dozes off",
                        "rmType": "ELEMENT",
                        "nodeId": "at0005",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Dozes off"
                        },
                        "localizedDescriptions": {
                          "en": "Dozes off during conversation or activities."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0005]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Dozes off",
                            "localizedName": "Dozes off",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0005",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Dozes off"
                            },
                            "localizedDescriptions": {
                              "en": "Dozes off during conversation or activities."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0005]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0006",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0007",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0073",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0005]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0005]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "easily_distracted",
                        "name": "Easily distracted",
                        "localizedName": "Easily distracted",
                        "rmType": "ELEMENT",
                        "nodeId": "at0009",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Easily distracted"
                        },
                        "localizedDescriptions": {
                          "en": "Is easily distracted by stimuli from the environment."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0009]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Easily distracted",
                            "localizedName": "Easily distracted",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0009",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Easily distracted"
                            },
                            "localizedDescriptions": {
                              "en": "Is easily distracted by stimuli from the environment."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0009]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0010",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0011",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0074",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0009]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0009]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "maintains_attention",
                        "name": "Maintains attention",
                        "localizedName": "Maintains attention",
                        "rmType": "ELEMENT",
                        "nodeId": "at0012",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Maintains attention"
                        },
                        "localizedDescriptions": {
                          "en": "Maintains attention to conversation or action."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0012]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Maintains attention",
                            "localizedName": "Maintains attention",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0012",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Maintains attention"
                            },
                            "localizedDescriptions": {
                              "en": "Maintains attention to conversation or action."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0012]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0013",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0014",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0075",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0012]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0012]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "incomplete_communication",
                        "name": "Incomplete communication",
                        "localizedName": "Incomplete communication",
                        "rmType": "ELEMENT",
                        "nodeId": "at0015",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Incomplete communication"
                        },
                        "localizedDescriptions": {
                          "en": "Does not finish question or answer."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0015]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Incomplete communication",
                            "localizedName": "Incomplete communication",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0015",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Incomplete communication"
                            },
                            "localizedDescriptions": {
                              "en": "Does not finish question or answer."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0015]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0016",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0017",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0076",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0015]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0015]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "irrelevant_responses",
                        "name": "Irrelevant responses",
                        "localizedName": "Irrelevant responses",
                        "rmType": "ELEMENT",
                        "nodeId": "at0018",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Irrelevant responses"
                        },
                        "localizedDescriptions": {
                          "en": "Gives answers that do not fit the question."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0018]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Irrelevant responses",
                            "localizedName": "Irrelevant responses",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0018",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Irrelevant responses"
                            },
                            "localizedDescriptions": {
                              "en": "Gives answers that do not fit the question."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0018]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0019",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0020",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0077",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0018]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0018]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "reacts_slowly",
                        "name": "Reacts slowly",
                        "localizedName": "Reacts slowly",
                        "rmType": "ELEMENT",
                        "nodeId": "at0045",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Reacts slowly"
                        },
                        "localizedDescriptions": {
                          "en": "Reacts slowly to instructions."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0045]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Reacts slowly",
                            "localizedName": "Reacts slowly",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0045",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Reacts slowly"
                            },
                            "localizedDescriptions": {
                              "en": "Reacts slowly to instructions."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0045]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0046",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0047",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0078",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0045]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0045]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "spatially_disorientated",
                        "name": "Spatially disorientated",
                        "localizedName": "Spatially disorientated",
                        "rmType": "ELEMENT",
                        "nodeId": "at0051",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Spatially disorientated"
                        },
                        "localizedDescriptions": {
                          "en": "Thinks to be somewhere else."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0051]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Spatially disorientated",
                            "localizedName": "Spatially disorientated",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0051",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Spatially disorientated"
                            },
                            "localizedDescriptions": {
                              "en": "Thinks to be somewhere else."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0051]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0052",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0053",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0079",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0051]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0051]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "temporal_awareness",
                        "name": "Temporal awareness",
                        "localizedName": "Temporal awareness",
                        "rmType": "ELEMENT",
                        "nodeId": "at0054",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Temporal awareness"
                        },
                        "localizedDescriptions": {
                          "en": "Knows which part of the day it is."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0054]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Temporal awareness",
                            "localizedName": "Temporal awareness",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0054",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Temporal awareness"
                            },
                            "localizedDescriptions": {
                              "en": "Knows which part of the day it is."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0054]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0055",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0056",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0080",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0054]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0054]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "recent_recall",
                        "name": "Recent recall",
                        "localizedName": "Recent recall",
                        "rmType": "ELEMENT",
                        "nodeId": "at0057",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Recent recall"
                        },
                        "localizedDescriptions": {
                          "en": "Remembers recent event."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0057]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Recent recall",
                            "localizedName": "Recent recall",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0057",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Recent recall"
                            },
                            "localizedDescriptions": {
                              "en": "Remembers recent event."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0057]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0058",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0059",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0081",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0057]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0057]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "agitated",
                        "name": "Agitated",
                        "localizedName": "Agitated",
                        "rmType": "ELEMENT",
                        "nodeId": "at0048",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Agitated"
                        },
                        "localizedDescriptions": {
                          "en": "Is picking, disorderly, restless."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0048]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Agitated",
                            "localizedName": "Agitated",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0048",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Agitated"
                            },
                            "localizedDescriptions": {
                              "en": "Is picking, disorderly, restless."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0048]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0049",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0050",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0082",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0048]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0048]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "pulls_accesses",
                        "name": "Pulls accesses",
                        "localizedName": "Pulls accesses",
                        "rmType": "ELEMENT",
                        "nodeId": "at0060",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Pulls accesses"
                        },
                        "localizedDescriptions": {
                          "en": "Pulls ivtubes, feeding tubes, catheters etc."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0060]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Pulls accesses",
                            "localizedName": "Pulls accesses",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0060",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Pulls accesses"
                            },
                            "localizedDescriptions": {
                              "en": "Pulls ivtubes, feeding tubes, catheters etc."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0060]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0061",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0062",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0083",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0060]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0060]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "emotionally_volatile",
                        "name": "Emotionally volatile",
                        "localizedName": "Emotionally volatile",
                        "rmType": "ELEMENT",
                        "nodeId": "at0063",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Emotionally volatile"
                        },
                        "localizedDescriptions": {
                          "en": "Is easy or sudden emotional."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0063]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Emotionally volatile",
                            "localizedName": "Emotionally volatile",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0063",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Emotionally volatile"
                            },
                            "localizedDescriptions": {
                              "en": "Is easy or sudden emotional."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0063]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0064",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0065",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0084",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0063]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0063]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "hallucinates",
                        "name": "Hallucinates",
                        "localizedName": "Hallucinates",
                        "rmType": "ELEMENT",
                        "nodeId": "at0066",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Hallucinates"
                        },
                        "localizedDescriptions": {
                          "en": "Sees/hears things which are not there."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0066]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Hallucinates",
                            "localizedName": "Hallucinates",
                            "rmType": "DV_ORDINAL",
                            "nodeId": "at0066",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Hallucinates"
                            },
                            "localizedDescriptions": {
                              "en": "Sees/hears things which are not there."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0066]/value",
                            "inputs": [
                              {
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "at0067",
                                    "label": "never",
                                    "localizedLabels": {
                                      "en": "never"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed"
                                    },
                                    "ordinal": 0
                                  },
                                  {
                                    "value": "at0068",
                                    "label": "sometimes - always",
                                    "localizedLabels": {
                                      "en": "sometimes - always"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was always observed once, or a few times or even all the time"
                                    },
                                    "ordinal": 1
                                  },
                                  {
                                    "value": "at0085",
                                    "label": "unable",
                                    "localizedLabels": {
                                      "en": "unable"
                                    },
                                    "localizedDescriptions": {
                                      "en": "During this shift, in contacts with the patient the described behavior was not observed since the patient was asleep or did not give ecessary verbal responses OR the rater does not find himself/herself competent to observe the absence or presence of the behavior"
                                    },
                                    "ordinal": 99
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0066]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0066]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "score",
                        "name": "Score",
                        "localizedName": "Score",
                        "rmType": "ELEMENT",
                        "nodeId": "at0069",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Score"
                        },
                        "localizedDescriptions": {
                          "en": "Total score per shift."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0069]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Score",
                            "localizedName": "Score",
                            "rmType": "DV_COUNT",
                            "nodeId": "at0069",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Score"
                            },
                            "localizedDescriptions": {
                              "en": "Total score per shift."
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0069]/value",
                            "inputs": [
                              {
                                "type": "INTEGER",
                                "validation": {
                                  "range": {
                                    "min": 0,
                                    "minOp": ">=",
                                    "max": 13,
                                    "maxOp": "<="
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0069]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0069]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "comment",
                        "name": "Comment",
                        "localizedName": "Comment",
                        "rmType": "ELEMENT",
                        "nodeId": "at0070",
                        "min": 0,
                        "max": 1,
                        "localizedNames": {
                          "en": "Comment"
                        },
                        "localizedDescriptions": {
                          "en": ""
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0070]",
                        "children": [
                          {
                            "id": "value",
                            "name": "Comment",
                            "localizedName": "Comment",
                            "rmType": "DV_TEXT",
                            "nodeId": "at0070",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                              "en": "Comment"
                            },
                            "localizedDescriptions": {
                              "en": ""
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0070]/value",
                            "inputs": [
                              {
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "null_flavour",
                            "name": "null_flavour",
                            "rmType": "DV_CODED_TEXT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0070]/null_flavour",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "TEXT"
                              },
                              {
                                "suffix": "value",
                                "type": "TEXT"
                              }
                            ]
                          },
                          {
                            "id": "feeder_audit",
                            "name": "feeder_audit",
                            "rmType": "FEEDER_AUDIT",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/items[at0070]/feeder_audit"
                          }
                        ],
                        "cardinalities": [
                          {
                            "min": 0,
                            "max": 1,
                            "ids": [
                              "value"
                            ],
                            "excludeFromWebTemplate": true
                          }
                        ]
                      },
                      {
                        "id": "uid",
                        "name": "uid",
                        "rmType": "UID_BASED_ID",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/uid",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "archetype_details",
                        "name": "archetype_details",
                        "rmType": "ARCHETYPED",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/archetype_details"
                      },
                      {
                        "id": "archetype_node_id",
                        "name": "archetype_node_id",
                        "rmType": "STRING",
                        "min": 1,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/archetype_node_id",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "name",
                        "name": "name",
                        "rmType": "DV_TEXT",
                        "min": 1,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/name",
                        "inputs": [
                          {
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "feeder_audit",
                        "name": "feeder_audit",
                        "rmType": "FEEDER_AUDIT",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/feeder_audit"
                      },
                      {
                        "id": "links",
                        "name": "links",
                        "rmType": "LINK",
                        "min": 0,
                        "max": -1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/data[at0003]/links"
                      }
                    ]
                  },
                  {
                    "id": "name",
                    "name": "name",
                    "localizedName": "name",
                    "rmType": "DV_TEXT",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/name",
                    "inputs": [
                      {
                        "type": "TEXT",
                        "list": [
                          {
                            "value": "Episode baseline",
                            "label": "Episode baseline"
                          }
                        ],
                        "listOpen": false
                      }
                    ]
                  },
                  {
                    "id": "uid",
                    "name": "uid",
                    "rmType": "UID_BASED_ID",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/uid",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "archetype_details",
                    "name": "archetype_details",
                    "rmType": "ARCHETYPED",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/archetype_details"
                  },
                  {
                    "id": "archetype_node_id",
                    "name": "archetype_node_id",
                    "rmType": "STRING",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/archetype_node_id",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "feeder_audit",
                    "name": "feeder_audit",
                    "rmType": "FEEDER_AUDIT",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/feeder_audit"
                  },
                  {
                    "id": "links",
                    "name": "links",
                    "rmType": "LINK",
                    "min": 0,
                    "max": -1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/links"
                  },
                  {
                    "id": "time",
                    "name": "time",
                    "rmType": "DV_DATE_TIME",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/events[at0002 and name/value='Episode baseline']/time",
                    "inputs": [
                      {
                        "type": "DATETIME"
                      }
                    ],
                    "inContext": true
                  }
                ]
              },
              {
                "id": "duration",
                "name": "duration",
                "rmType": "DV_DURATION",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/duration",
                "inputs": [
                  {
                    "suffix": "year",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "month",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "day",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "week",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "hour",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "minute",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "second",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  }
                ]
              },
              {
                "id": "uid",
                "name": "uid",
                "rmType": "UID_BASED_ID",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/uid",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "period",
                "name": "period",
                "rmType": "DV_DURATION",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/period",
                "inputs": [
                  {
                    "suffix": "year",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "month",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "day",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "week",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "hour",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "minute",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  },
                  {
                    "suffix": "second",
                    "type": "INTEGER",
                    "validation": {
                      "range": {
                        "min": 0,
                        "minOp": ">="
                      }
                    }
                  }
                ]
              },
              {
                "id": "archetype_details",
                "name": "archetype_details",
                "rmType": "ARCHETYPED",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/archetype_details"
              },
              {
                "id": "archetype_node_id",
                "name": "archetype_node_id",
                "rmType": "STRING",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/archetype_node_id",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "origin",
                "name": "origin",
                "rmType": "DV_DATE_TIME",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/origin",
                "inputs": [
                  {
                    "type": "DATETIME"
                  }
                ],
                "inContext": true
              },
              {
                "id": "name",
                "name": "name",
                "rmType": "DV_TEXT",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/name",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "feeder_audit",
                "name": "feeder_audit",
                "rmType": "FEEDER_AUDIT",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/feeder_audit"
              },
              {
                "id": "links",
                "name": "links",
                "rmType": "LINK",
                "min": 0,
                "max": -1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/data[at0001]/links"
              }
            ]
          },
          {
            "id": "item_tree",
            "name": "Item tree",
            "localizedName": "Item tree",
            "rmType": "ITEM_TREE",
            "nodeId": "at0004",
            "min": 1,
            "max": 1,
            "localizedNames": {
              "en": "Item tree"
            },
            "localizedDescriptions": {
              "en": "@ internal @"
            },
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]",
            "children": [
              {
                "id": "exclusion_of_examination",
                "name": "Exclusion of examination",
                "localizedName": "Exclusion of examination",
                "rmType": "CLUSTER",
                "nodeId": "openEHR-EHR-CLUSTER.exclusion_exam.v1",
                "min": 0,
                "max": 1,
                "localizedNames": {
                  "en": "Exclusion of examination"
                },
                "localizedDescriptions": {
                  "en": "Positive statement to record that a physical examination or clinical test was not performed."
                },
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]",
                "children": [
                  {
                    "id": "examination_not_done",
                    "name": "Examination not done",
                    "localizedName": "Examination not done",
                    "rmType": "ELEMENT",
                    "nodeId": "at0001",
                    "min": 1,
                    "max": 1,
                    "localizedNames": {
                      "en": "Examination not done"
                    },
                    "localizedDescriptions": {
                      "en": "Statement to explicity record that the examination was not performed."
                    },
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0001]",
                    "children": [
                      {
                        "id": "value",
                        "name": "Examination not done",
                        "localizedName": "Examination not done",
                        "rmType": "DV_BOOLEAN",
                        "nodeId": "at0001",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Examination not done"
                        },
                        "localizedDescriptions": {
                          "en": "Statement to explicity record that the examination was not performed."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0001]/value",
                        "inputs": [
                          {
                            "type": "BOOLEAN",
                            "list": [
                              {
                                "value": "true",
                                "label": "true"
                              }
                            ]
                          }
                        ],
                        "annotations": {
                          "comment": "Record as True if the examination was not performed."
                        }
                      },
                      {
                        "id": "null_flavour",
                        "name": "null_flavour",
                        "rmType": "DV_CODED_TEXT",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0001]/null_flavour",
                        "inputs": [
                          {
                            "suffix": "code",
                            "type": "TEXT"
                          },
                          {
                            "suffix": "value",
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "feeder_audit",
                        "name": "feeder_audit",
                        "rmType": "FEEDER_AUDIT",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0001]/feeder_audit"
                      }
                    ],
                    "annotations": {
                      "comment": "Record as True if the examination was not performed."
                    },
                    "cardinalities": [
                      {
                        "min": 0,
                        "max": 1,
                        "ids": [
                          "value"
                        ],
                        "excludeFromWebTemplate": true
                      }
                    ]
                  },
                  {
                    "id": "reason",
                    "name": "Reason",
                    "localizedName": "Reason",
                    "rmType": "ELEMENT",
                    "nodeId": "at0002",
                    "min": 0,
                    "max": 1,
                    "localizedNames": {
                      "en": "Reason"
                    },
                    "localizedDescriptions": {
                      "en": "Reason for the 'not done' statement."
                    },
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0002]",
                    "children": [
                      {
                        "id": "value",
                        "name": "Reason",
                        "localizedName": "Reason",
                        "rmType": "DV_CODED_TEXT",
                        "nodeId": "at0002",
                        "min": 1,
                        "max": 1,
                        "localizedNames": {
                          "en": "Reason"
                        },
                        "localizedDescriptions": {
                          "en": "Reason for the 'not done' statement."
                        },
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0002]/value",
                        "children": [
                          {
                            "id": "defining_code",
                            "name": "defining_code",
                            "localizedName": "defining_code",
                            "rmType": "CODE_PHRASE",
                            "min": 0,
                            "max": 1,
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0002]/value/defining_code",
                            "inputs": [
                              {
                                "suffix": "code",
                                "type": "CODED_TEXT",
                                "list": [
                                  {
                                    "value": "patient_not_present",
                                    "label": "Patient ist nicht anwesend",
                                    "localizedLabels": {
                                      "en": "Patient ist nicht anwesend"
                                    },
                                    "localizedDescriptions": {
                                      "en": ""
                                    }
                                  },
                                  {
                                    "value": "other",
                                    "label": "Anderes",
                                    "localizedLabels": {
                                      "en": "Anderes"
                                    },
                                    "localizedDescriptions": {
                                      "en": ""
                                    }
                                  }
                                ],
                                "terminology": "local_terms"
                              }
                            ]
                          }
                        ],
                        "inputs": [
                          {
                            "suffix": "code",
                            "type": "CODED_TEXT",
                            "list": [
                              {
                                "value": "patient_not_present",
                                "label": "Patient ist nicht anwesend",
                                "localizedLabels": {
                                  "en": "Patient ist nicht anwesend"
                                },
                                "localizedDescriptions": {
                                  "en": ""
                                }
                              },
                              {
                                "value": "other",
                                "label": "Anderes",
                                "localizedLabels": {
                                  "en": "Anderes"
                                },
                                "localizedDescriptions": {
                                  "en": ""
                                }
                              }
                            ],
                            "terminology": "local_terms"
                          }
                        ],
                        "annotations": {
                          "comment": "For example: patient factors, equipment factors, time constraints."
                        }
                      },
                      {
                        "id": "null_flavour",
                        "name": "null_flavour",
                        "rmType": "DV_CODED_TEXT",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0002]/null_flavour",
                        "inputs": [
                          {
                            "suffix": "code",
                            "type": "TEXT"
                          },
                          {
                            "suffix": "value",
                            "type": "TEXT"
                          }
                        ]
                      },
                      {
                        "id": "feeder_audit",
                        "name": "feeder_audit",
                        "rmType": "FEEDER_AUDIT",
                        "min": 0,
                        "max": 1,
                        "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/items[at0002]/feeder_audit"
                      }
                    ],
                    "annotations": {
                      "comment": "For example: patient factors, equipment factors, time constraints."
                    },
                    "cardinalities": [
                      {
                        "min": 0,
                        "max": 1,
                        "ids": [
                          "value"
                        ],
                        "excludeFromWebTemplate": true
                      }
                    ]
                  },
                  {
                    "id": "uid",
                    "name": "uid",
                    "rmType": "UID_BASED_ID",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/uid",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "archetype_details",
                    "name": "archetype_details",
                    "rmType": "ARCHETYPED",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/archetype_details"
                  },
                  {
                    "id": "archetype_node_id",
                    "name": "archetype_node_id",
                    "rmType": "STRING",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/archetype_node_id",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "name",
                    "name": "name",
                    "rmType": "DV_TEXT",
                    "min": 1,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/name",
                    "inputs": [
                      {
                        "type": "TEXT"
                      }
                    ]
                  },
                  {
                    "id": "feeder_audit",
                    "name": "feeder_audit",
                    "rmType": "FEEDER_AUDIT",
                    "min": 0,
                    "max": 1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/feeder_audit"
                  },
                  {
                    "id": "links",
                    "name": "links",
                    "rmType": "LINK",
                    "min": 0,
                    "max": -1,
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/items[openEHR-EHR-CLUSTER.exclusion_exam.v1]/links"
                  }
                ]
              },
              {
                "id": "uid",
                "name": "uid",
                "rmType": "UID_BASED_ID",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/uid",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "archetype_details",
                "name": "archetype_details",
                "rmType": "ARCHETYPED",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/archetype_details"
              },
              {
                "id": "archetype_node_id",
                "name": "archetype_node_id",
                "rmType": "STRING",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/archetype_node_id",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "name",
                "name": "name",
                "rmType": "DV_TEXT",
                "min": 1,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/name",
                "inputs": [
                  {
                    "type": "TEXT"
                  }
                ]
              },
              {
                "id": "feeder_audit",
                "name": "feeder_audit",
                "rmType": "FEEDER_AUDIT",
                "min": 0,
                "max": 1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/feeder_audit"
              },
              {
                "id": "links",
                "name": "links",
                "rmType": "LINK",
                "min": 0,
                "max": -1,
                "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/protocol[at0004]/links"
              }
            ]
          },
          {
            "id": "workflow_id",
            "name": "workflow_id",
            "rmType": "OBJECT_REF",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/workflow_id"
          },
          {
            "id": "archetype_node_id",
            "name": "archetype_node_id",
            "rmType": "STRING",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/archetype_node_id",
            "inputs": [
              {
                "type": "TEXT"
              }
            ]
          },
          {
            "id": "subject",
            "name": "subject",
            "rmType": "PARTY_PROXY",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/subject",
            "inputs": [
              {
                "suffix": "id",
                "type": "TEXT"
              },
              {
                "suffix": "id_scheme",
                "type": "TEXT"
              },
              {
                "suffix": "id_namespace",
                "type": "TEXT"
              },
              {
                "suffix": "name",
                "type": "TEXT"
              }
            ],
            "inContext": true
          },
          {
            "id": "language",
            "name": "language",
            "rmType": "CODE_PHRASE",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/language",
            "inContext": true
          },
          {
            "id": "encoding",
            "name": "encoding",
            "rmType": "CODE_PHRASE",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/encoding",
            "inContext": true
          },
          {
            "id": "uid",
            "name": "uid",
            "rmType": "UID_BASED_ID",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/uid",
            "inputs": [
              {
                "type": "TEXT"
              }
            ]
          },
          {
            "id": "guideline_id",
            "name": "guideline_id",
            "rmType": "OBJECT_REF",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/guideline_id"
          },
          {
            "id": "archetype_details",
            "name": "archetype_details",
            "rmType": "ARCHETYPED",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/archetype_details"
          },
          {
            "id": "provider",
            "name": "provider",
            "rmType": "PARTY_PROXY",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/provider",
            "inputs": [
              {
                "suffix": "id",
                "type": "TEXT"
              },
              {
                "suffix": "id_scheme",
                "type": "TEXT"
              },
              {
                "suffix": "id_namespace",
                "type": "TEXT"
              },
              {
                "suffix": "name",
                "type": "TEXT"
              }
            ],
            "inContext": true
          },
          {
            "id": "name",
            "name": "name",
            "rmType": "DV_TEXT",
            "min": 1,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/name",
            "inputs": [
              {
                "type": "TEXT"
              }
            ]
          },
          {
            "id": "feeder_audit",
            "name": "feeder_audit",
            "rmType": "FEEDER_AUDIT",
            "min": 0,
            "max": 1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/feeder_audit"
          },
          {
            "id": "links",
            "name": "links",
            "rmType": "LINK",
            "min": 0,
            "max": -1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/links"
          },
          {
            "id": "other_participations",
            "name": "other_participations",
            "rmType": "PARTICIPATION",
            "min": 0,
            "max": -1,
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.delirium_observation_screening_scale.v0]/other_participations",
            "inContext": true
          }
        ],
        "cardinalities": [
          {
            "min": 0,
            "max": 1,
            "ids": [
              "item_tree"
            ],
            "excludeFromWebTemplate": true
          }
        ]
      },
      {
        "id": "archetype_node_id",
        "name": "archetype_node_id",
        "rmType": "STRING",
        "min": 1,
        "max": 1,
        "aqlPath": "/archetype_node_id",
        "inputs": [
          {
            "type": "TEXT"
          }
        ]
      },
      {
        "id": "composer",
        "name": "composer",
        "rmType": "PARTY_PROXY",
        "min": 1,
        "max": 1,
        "aqlPath": "/composer",
        "inputs": [
          {
            "suffix": "id",
            "type": "TEXT"
          },
          {
            "suffix": "id_scheme",
            "type": "TEXT"
          },
          {
            "suffix": "id_namespace",
            "type": "TEXT"
          },
          {
            "suffix": "name",
            "type": "TEXT"
          }
        ],
        "inContext": true
      },
      {
        "id": "language",
        "name": "language",
        "rmType": "CODE_PHRASE",
        "min": 1,
        "max": 1,
        "aqlPath": "/language",
        "inContext": true
      },
      {
        "id": "uid",
        "name": "uid",
        "rmType": "UID_BASED_ID",
        "min": 0,
        "max": 1,
        "aqlPath": "/uid",
        "inputs": [
          {
            "type": "TEXT"
          }
        ]
      },
      {
        "id": "archetype_details",
        "name": "archetype_details",
        "rmType": "ARCHETYPED",
        "min": 0,
        "max": 1,
        "aqlPath": "/archetype_details"
      },
      {
        "id": "name",
        "name": "name",
        "rmType": "DV_TEXT",
        "min": 1,
        "max": 1,
        "aqlPath": "/name",
        "inputs": [
          {
            "type": "TEXT"
          }
        ]
      },
      {
        "id": "feeder_audit",
        "name": "feeder_audit",
        "rmType": "FEEDER_AUDIT",
        "min": 0,
        "max": 1,
        "aqlPath": "/feeder_audit"
      },
      {
        "id": "links",
        "name": "links",
        "rmType": "LINK",
        "min": 0,
        "max": -1,
        "aqlPath": "/links"
      },
      {
        "id": "territory",
        "name": "territory",
        "rmType": "CODE_PHRASE",
        "min": 1,
        "max": 1,
        "aqlPath": "/territory",
        "inContext": true
      }
    ],
    "cardinalities": [
      {
        "min": 0,
        "max": 1,
        "ids": [
          "context"
        ],
        "excludeFromWebTemplate": true
      }
    ]
  }
}
```

</ScrollableCode>

---

# Using Web Templates in Frontend Development

<ScrollableCode>

```javascript
import React from 'react';
const generateForm = (webTemplate) => {
  const renderField = (field) => {
    switch (field.rmType) {
      case 'DV_QUANTITY':
        return (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.localizedName}</label>
            <input
              type="number"
              id={field.id}
              name={field.id}
              step={1 / Math.pow(10, field.annotations.precision)}
            />
            <span>{field.annotations.unit}</span>
          </div>
        );
      case 'DV_TEXT':
        return (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.localizedName}</label>
            <input type="text" id={field.id} name={field.id} />
          </div>
        );
      // Add more cases for other rmTypes
      default:
        return null;
    }
  };

  const renderChildren = (children) => {
    return children.map(child => {
      if (child.children) {
        return (
          <fieldset key={child.id}>
            <legend>{child.localizedName}</legend>
            {renderChildren(child.children)}
          </fieldset>
        );
      }
      return renderField(child);
    });
  };

  return (
    <form>
      <h2>{webTemplate.tree.localizedName}</h2>
      {renderChildren(webTemplate.tree.children)}
      <button type="submit">Submit</button>
    </form>
  );
};

const VitalSignsForm = ({ webTemplate }) => {
  return generateForm(webTemplate);
};

export default VitalSignsForm;
```

</ScrollableCode>

---

# Benefits of Web Templates for Web Application Development 🌐

<v-clicks>

01. **Dynamic Form Generation**: "Easily" create forms based on the template structure
02. **Localization Support**: Use `localizedName` and `localizedDescriptions` for multi-language support
03. **Validation**: Implement client and server-side validation based on `min`, `max`, and other constraints
04. **Flexibility**: Adapt to changes in templates without modifying frontend code
05. **Consistency**: Ensure UI aligns with the underlying OpenEHR data model
06. **Reduced Development Time**: Automate repetitive aspects of UI creation

</v-clicks>

<!-- "Easily" - requires certain standards and consistency during the design phase of the templates -->
---
layout: statement
---

# Reality check 🤯

This approach in the "real world"

---

# What works for something standardized such as the MedScores project...

Screenshot here...

---

# Is as nightmare for clinical forms such as this one...

Screenshot here...

---
layout: statement
---

# Flat Format 🥞 vs. Non-Flat Format 🌳

Balancing Simplicity and Richness in OpenEHR Data

---
layout: two-cols-header
---

# Understanding Flat vs. Non-Flat Formats

::left::

## Flat Format

* Simplified, denormalized representation
* Key-value pairs
* Easier for data entry and querying
* Loses some context and relationships

::right::

## Non-Flat Format

* Full, hierarchical OpenEHR structure
* Preserves all context and relationships
* More complex to work with
* Retains all metadata and semantic meaning

---

# Example: Flat vs. Non-Flat Format

```json
{
  "vital_signs/blood_pressure/systolic|magnitude": 120,
  "vital_signs/blood_pressure/systolic|unit": "mm[Hg]",
  "vital_signs/blood_pressure/diastolic|magnitude": 80,
  "vital_signs/blood_pressure/diastolic|unit": "mm[Hg]",
  "vital_signs/pulse_rate|magnitude": 72,
  "vital_signs/pulse_rate|unit": "/min"
}

```

<ScrollableCode style="height: 250px">

```json
{
  "vital_signs": {
    "_type": "COMPOSITION",
    "name": {
      "_type": "DV_TEXT",
      "value": "Vital Signs"
    },
    "content": [
      {
        "_type": "OBSERVATION",
        "name": {
          "_type": "DV_TEXT",
          "value": "Blood Pressure"
        },
        "data": {
          "_type": "HISTORY",
          "events": [
            {
              "_type": "POINT_EVENT",
              "data": {
                "_type": "ITEM_TREE",
                "items": [
                  {
                    "_type": "ELEMENT",
                    "name": {
                      "_type": "DV_TEXT",
                      "value": "Systolic"
                    },
                    "value": {
                      "_type": "DV_QUANTITY",
                      "magnitude": 120,
                      "units": "mm[Hg]"
                    }
                  },
                  {
                    "_type": "ELEMENT",
                    "name": {
                      "_type": "DV_TEXT",
                      "value": "Diastolic"
                    },
                    "value": {
                      "_type": "DV_QUANTITY",
                      "magnitude": 80,
                      "units": "mm[Hg]"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "_type": "OBSERVATION",
        "name": {
          "_type": "DV_TEXT",
          "value": "Pulse Rate"
        },
        "data": {
          "_type": "HISTORY",
          "events": [
            {
              "_type": "POINT_EVENT",
              "data": {
                "_type": "ITEM_TREE",
                "items": [
                  {
                    "_type": "ELEMENT",
                    "name": {
                      "_type": "DV_TEXT",
                      "value": "Rate"
                    },
                    "value": {
                      "_type": "DV_QUANTITY",
                      "magnitude": 72,
                      "units": "/min"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}

```

</ScrollableCode>

---

# Choosing Between Flat and Non-Flat Formats

<v-clicks>

## Use Flat Format When:

* Performing simple data entry
* Executing basic queries
* Integrating with systems that prefer key-value pairs
* Optimizing for storage or transmission efficiency

## Use Non-Flat Format When:

* Preserving full clinical context is crucial
* Implementing complex clinical decision support
* Ensuring maximum interoperability with other OpenEHR systems
* Performing advanced querying or data analysis

</v-clicks>

---

# Converting Between Flat and Non-Flat Formats

```javascript
// Example function to flatten a non-flat OpenEHR structure
function flattenOpenEHR(data, prefix = '') {
    let result = {};

    for (let key in data) {
        if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
            let flatObject = flattenOpenEHR(data[key], `${prefix}${key}/`);
            Object.assign(result, flatObject);
        } else if (Array.isArray(data[key])) {
            data[key].forEach((item, index) => {
                let flatArray = flattenOpenEHR(item, `${prefix}${key}:${index}/`);
                Object.assign(result, flatArray);
            });
        } else {
            result[`${prefix}${key}`] = data[key];
        }
    }

    return result;
}

// Usage
const flatData = flattenOpenEHR(nonFlatData);
console.log(flatData);
```

---
layout: statement
---

# REST API Interaction 🔌

Connecting Frontend to OpenEHR Backend

---

# OpenEHR REST API Overview

<v-clicks>

* Standardized way to interact with OpenEHR data
* Supports CRUD operations on EHR, Compositions, and other OpenEHR entities
* Typically follows RESTful principles
* Uses JSON for data exchange
* Supports both flat and non-flat formats

</v-clicks>

---

# Common OpenEHR REST API Endpoints

<v-clicks>

* `/ehr`: Manage Electronic Health Records
* `/ehr/{ehr_id}/composition`: Manage Compositions for a specific EHR
* `/template`: Retrieve and manage templates
* `/query`: Execute AQL queries

</v-clicks>

---

# Example: Fetching a Composition

```javascript
async function fetchComposition(ehrId, compositionId) {
    const response = await fetch(`/ehr/${ehrId}/composition/${compositionId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Prefer: 'return=representation',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const composition = await response.json();
    return composition;
}

// Usage
try {
    const composition = await fetchComposition('123456', '78901');
    console.log(composition);
} catch (error) {
    console.error('Failed to fetch composition:', error);
}
```

---

# Example: Creating a New Composition

<ScrollableCode>

```javascript
async function createComposition(ehrId, compositionData) {
    const response = await fetch(`/ehr/${ehrId}/composition`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Prefer: 'return=representation',
        },
        body: JSON.stringify(compositionData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const createdComposition = await response.json();
    return createdComposition;
}

// Usage
const newComposition = {
    // Composition data...
};

try {
    const createdComposition = await createComposition('123456', newComposition);
    console.log('New composition created:', createdComposition);
} catch (error) {
    console.error('Failed to create composition:', error);
}
```

</ScrollableCode>

---

# Best Practices for OpenEHR REST API Interaction

<v-clicks>

01. **Use appropriate content types**: Specify `Content-Type` and `Accept` headers
02. **Handle versioning**: Use `If-Match` header for updates to prevent conflicts
03. **Implement error handling**: Properly handle and log different HTTP status codes
04. **Use query parameters**: Utilize filtering, sorting, and pagination where supported
05. **Implement retry logic**: For transient errors or network issues
06. **Cache responses**: When appropriate, to reduce server load and improve performance
07. **Use bulk operations**: When available, for better performance with large datasets
08. **Validate data**: Before sending to the API to catch errors early

</v-clicks>

---
layout: statement
---

# AQL (Archetype Query Language) 🔍

Querying OpenEHR Data

---

# Understanding AQL

<v-clicks>

* SQL-like query language designed specifically for OpenEHR
* Allows querying across all patients and compositions
* Path-based approach to navigate through archetypes and templates
* Supports aggregations, joins, and complex conditions
* Can query both structured and unstructured data

</v-clicks>

---

# AQL Query Types

### Single EHR Queries

A common use case where you query data within a single EHR

### Population Queries

Population queries are queries which are executed on several EHRs in the same request. These queries are not referring or using any ehr_id parameter to constrain the scope on a specific EHR. (Reseach, epidemiology, ward lists)

### Stored Queries

Stored queries are queries that are stored in the EHR server and can be executed by name. They are useful for complex queries that are used frequently. (can be retrieved via the definition endpoint)

### Ad-hoc Queries

As opposed to stored queries, ad-hoc type queries does not have their definitions stored on the server, neither any associated identifier

---

# AQL Basic Structure

```sql
SELECT [DISTINCT]
    <select_clause>
FROM
    EHR [ehr]
    [CONTAINS <containment_expression>]
WHERE
    <where_clause>
ORDER BY
    <order_by_clause>
LIMIT
    <limit_clause>
OFFSET
    <offset_clause>
```

---

# AQL Example: Querying Blood Pressure Measurements

```sql
SELECT
    e/ehr_id/value as ehrId,
    c/context/start_time/value as observationTime,
    bp/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic,
    bp/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic
FROM
    EHR e
    CONTAINS COMPOSITION c
    CONTAINS OBSERVATION bp[openEHR-EHR-OBSERVATION.blood_pressure.v2]
WHERE
    c/context/start_time/value >= '2023-01-01T00:00:00'
    AND c/context/start_time/value < '2024-01-01T00:00:00'
ORDER BY
    observationTime DESC
```

---

# Executing AQL Queries via REST API

<ScrollableCode>

```javascript
async function executeAQLQuery(aqlQuery) {
    const response = await fetch('/query/aql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            q: aqlQuery
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
}

// Usage
const aqlQuery = `
SELECT
    e/ehr_id/value as ehrId,
    c/context/start_time/value as observationTime,
    bp/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic,
    bp/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic
FROM
    EHR e
    CONTAINS COMPOSITION c
    CONTAINS OBSERVATION bp[openEHR-EHR-OBSERVATION.blood_pressure.v2]
WHERE
    c/context/start_time/value >= '2023-01-01T00:00:00'
    AND c/context/start_time/value < '2024-01-01T00:00:00'
ORDER BY
    observationTime DESC
`;

try {
    const result = await executeAQLQuery(aqlQuery);
    console.log('Query result:', result);
} catch (error) {
    console.error('Failed to execute AQL query:', error);
}
```

</ScrollableCode>

---

# AQL Best Practices

<v-clicks>

01. **Use aliases**: Improve readability with meaningful aliases for paths and results
02. **Optimize performance**:
   - Use specific containment expressions
   - Avoid unnecessary JOINs
   - Limit result sets when possible
03. **Parameterize queries**: Use variable placeholders for flexible, reusable queries
04. **Use appropriate data types**: Match the expected data type in comparisons
05. **Handle null values**: Consider null cases in your queries
06. **Use aggregations wisely**: Understand the impact on performance
07. **Test queries**: Validate results and performance before production use
08. **Version control**: Manage AQL queries alongside application code
09. **Document queries**: Add comments explaining complex logic or assumptions

</v-clicks>

---

# Parameterized AQL Query Example

<ScrollableCode>

```javascript
const aqlQuery = `
SELECT
    e/ehr_id/value as ehrId,
    c/context/start_time/value as observationTime,
    bp/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic,
    bp/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic
FROM
    EHR e
    CONTAINS COMPOSITION c
    CONTAINS OBSERVATION bp[openEHR-EHR-OBSERVATION.blood_pressure.v2]
WHERE
    c/context/start_time/value >= $start_date
    AND c/context/start_time/value < $end_date
ORDER BY
    observationTime DESC
`;

const queryParameters = {
    start_date: '2023-01-01T00:00:00',
    end_date: '2024-01-01T00:00:00',
};

async function executeParameterizedAQLQuery(aqlQuery, parameters) {
    const response = await fetch('/query/aql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            q: aqlQuery,
            offset: 0,
            fetch: 100,
            query_parameters: parameters,
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
}

// Usage
try {
    const result = await executeParameterizedAQLQuery(aqlQuery, queryParameters);
    console.log('Query result:', result);
} catch (error) {
    console.error('Failed to execute AQL query:', error);
}
```

</ScrollableCode>

---
layout: statement
---

# Best Practices ✅ and Common Pitfalls ❗ (so far)

Navigating the OpenEHR Landscape

---

# Best Practices for OpenEHR Development

<v-clicks>

01. **Understand the OpenEHR architecture**: Familiarize yourself with RM, archetypes, and templates
02. **Use appropriate tools**: Leverage OpenEHR-specific development tools and libraries
03. **Follow naming conventions**: Use consistent and meaningful names for archetypes and templates
04. **Version control everything**: Manage archetypes, templates, and queries in version control
05. **Implement proper error handling**: Handle OpenEHR-specific errors and edge cases
06. **Optimize for performance**: Consider query optimization and caching strategies
07. **Ensure data quality**: Implement validation at both client and server sides
08. **Maintain backwards compatibility**: Consider the impact of changes on existing data
09. **Document your work**: Provide clear documentation for archetypes, templates, and APIs
10. **Engage with the community**: Participate in OpenEHR forums and contribute to shared resources

</v-clicks>

---
layout: two-cols-header
---

# Versioning and Concurrency in OpenEHR

::left::

## Versioning

* Each update creates a new version
* Use `If-Match` header for updates
* Retrieve version history via API

## Concurrency

* Optimistic locking
* Version-aware updates
* Conflict resolution strategies

::right::

<v-click>

## Best Practices

* Always check and update based on latest version
* Implement retry logic for conflict resolution
* Use transactions for complex updates

</v-click>

---

# Common Pitfalls in OpenEHR Development

<v-clicks>

01. **Pitfall: Treating OpenEHR data as flat structures** - Solution: Understand and respect the hierarchical structure in your queries and data handling

02. **Embedding clinical concepts directly in application code** - Solution: Use archetypes and templates to represent clinical concepts

03. **Not thoroughly testing with realistic clinical data** - Solution: Implement comprehensive testing with a variety of clinical scenarios

04. **Pitfall: Not using standard terminologies in archetypes and templates** - Solution: Incorporate terminology bindings to enhance interoperability

05. **Pitfall: Not properly handling OpenEHR-specific errors** - Solution: Implement comprehensive error handling and logging

06. **Pitfall: Writing inefficient AQL queries that perform poorly at scale** - Solution: Optimize queries and use appropriate indexing strategies

07. **Pitfall: Focusing solely on the backend without considering frontend usability** - Solution: Design user-friendly interfaces that abstract OpenEHR complexity

</v-clicks>

---

# Handling OpenEHR-Specific Errors

<ScrollableCode>

```typescript
class OpenEHRError extends Error {
    constructor(message, code, details) {
        super(message);
        this.name = 'OpenEHRError';
        this.code = code;
        this.details = details;
    }
}

function handleOpenEHRError(error) {
    if (error instanceof OpenEHRError) {
        console.error(`OpenEHR Error (${error.code}): ${error.message}`);
        console.error('Details:', error.details);
        // Handle specific error codes
        switch (error.code) {
            case 'INVALID_EHR':
                // Handle invalid EHR error
                break;
            case 'ARCHETYPE_NOT_FOUND':
                // Handle archetype not found error
                break;
                // Add more specific error handlers
            default:
                // Handle general OpenEHR errors
                break;
        }
    } else {
        console.error('Unexpected error:', error);
        // Handle unexpected errors
    }
}

// Usage
try {
    // OpenEHR operation
} catch (error) {
    handleOpenEHRError(error);
}
```

</ScrollableCode>

---

# Performance Optimization Strategies

<v-clicks>

01. **Query Optimization**:

   - Use specific containment expressions in AQL
   - Limit result sets when possible
   - Use appropriate indexing on the backend

02. **Caching**:

   - Cache frequently used templates and archetypes
   - Implement result caching for common queries
   - Use ETags for efficient cache validation

03. **Batch Operations**:

   - Use bulk data operations when available
   - Implement client-side batching for multiple operations

04. **Asynchronous Processing**:

   - Use asynchronous operations for time-consuming tasks
   - Implement background jobs for data processing and aggregation

05. **Data Denormalization**:

   - Consider denormalizing data for frequently accessed information
   - Balance between normalization and query performance

06. **Efficient Data Serialization**:

   - Use efficient data formats (e.g., Protocol Buffers, MessagePack)
   - Implement partial response mechanisms to reduce payload size

07. **Load Balancing**:

   - Distribute requests across multiple servers
   - Implement read replicas for read-heavy workloads

08. **Monitoring and Profiling**:
   - Implement performance monitoring
   - Regularly profile and optimize slow queries

</v-clicks>

---
layout: statement
---

# Hands-on Examples 💻

Putting OpenEHR into Practice

---

# Creating a Patient Vital Signs Form

Here's an example of how to create a React component for a vital signs form using OpenEHR web templates:

<ScrollableCode>

```jsx
import React, { useState, useEffect } from 'react';

const VitalSignsForm = ({ ehrId, webTemplate }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize form data based on web template
    const initialData = {};
    webTemplate.tree.children.forEach(child => {
      if (child.children) {
        child.children.forEach(grandchild => {
          initialData[grandchild.id] = '';
        });
      }
    });
    setFormData(initialData);
  }, [webTemplate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const composition = createCompositionFromFormData(formData, webTemplate);
      const response = await fetch(`/ehr/${ehrId}/composition`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(composition)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Composition created:', result);
      // Handle successful submission (e.g., show success message, clear form)
    } catch (error) {
      console.error('Failed to submit vital signs:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{webTemplate.tree.localizedName}</h2>
      {webTemplate.tree.children.map(section => (
        <fieldset key={section.id}>
          <legend>{section.localizedName}</legend>
          {section.children.map(field => (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.localizedName}</label>
              <input
                type="number"
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                step={1 / Math.pow(10, field.annotations.precision)}
              />
              <span>{field.annotations.unit}</span>
            </div>
          ))}
        </fieldset>
      ))}
      <button type="submit">Submit Vital Signs</button>
    </form>
  );
};

export default VitalSignsForm;
```

</ScrollableCode>

---

# Example 2: Querying and Displaying Patient Data

This example demonstrates how to query OpenEHR data using AQL and display it using a chart component:

<ScrollableCode>

```jsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PatientVitalSigns = ({ ehrId }) => {
  const [vitalSigns, setVitalSigns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVitalSigns = async () => {
      const aqlQuery = `
        SELECT
          c/context/start_time/value as date,
          bp/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic,
          bp/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic,
          hr/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as heartRate
        FROM
          EHR e
          CONTAINS COMPOSITION c
          CONTAINS (
            OBSERVATION bp[openEHR-EHR-OBSERVATION.blood_pressure.v2] and
            OBSERVATION hr[openEHR-EHR-OBSERVATION.heart_rate.v1]
          )
        WHERE
          e/ehr_id/value = $ehrId
        ORDER BY
          date DESC
        LIMIT 10
      `;

      try {
        const response = await fetch('/query/aql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            q: aqlQuery,
            offset: 0,
            fetch: 10,
            query_parameters: { ehrId: ehrId }
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setVitalSigns(result.rows.map(row => ({
          date: new Date(row.date).toLocaleDateString(),
          systolic: row.systolic,
          diastolic: row.diastolic,
          heartRate: row.heartRate
        })));
      } catch (error) {
        console.error('Failed to fetch vital signs:', error);
        setError('Failed to load vital signs data. Please try again later.');
      }
    };

    fetchVitalSigns();
  }, [ehrId]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="vital-signs-chart">
      <h2>Patient Vital Signs History</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={vitalSigns}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="systolic" stroke="#8884d8" name="Systolic BP" />
          <Line yAxisId="left" type="monotone" dataKey="diastolic" stroke="#82ca9d" name="Diastolic BP" />
          <Line yAxisId="right" type="monotone" dataKey="heartRate" stroke="#ffc658" name="Heart Rate" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientVitalSigns;
```

</ScrollableCode>

---

# Recap and Key Takeaways 🎓

<v-clicks>

01. OpenEHR provides a flexible, future-proof approach to health data management
02. Understanding the core concepts (RM, Archetypes, Templates, Compositions) is crucial
03. Web Templates simplify frontend development for OpenEHR-based systems
04. AQL offers powerful querying capabilities for OpenEHR data
05. REST APIs enable standardized interaction with OpenEHR systems
06. Best practices include proper error handling, performance optimization, and adhering to OpenEHR principles
07. Common pitfalls can be avoided through careful planning and understanding of OpenEHR concepts
08. Hands-on examples demonstrate practical application of OpenEHR in web development

</v-clicks>

---

# Engaging with the OpenEHR Community 🌐

## Community Resources

* [OpenEHR.org](https://www.openehr.org)
* [OpenEHR Discourse Forum](https://discourse.openehr.org)
* [OpenEHR GitHub](https://github.com/openEHR)
* [OpenEHR Twitter](https://twitter.com/openehr)
* [EHRBase GitHub](github.com/ehrbase/ehrbase)

---

# 🙏 Thank You!

Questions? Let's discuss!
