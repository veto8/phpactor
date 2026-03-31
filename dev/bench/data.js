window.BENCHMARK_DATA = {
  "lastUpdate": 1774922317658,
  "repoUrl": "https://github.com/veto8/phpactor",
  "entries": {
    "Phpactor Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb25ad263b9d3aa87f98a6040bdc3194d715766c",
          "message": "gh-3022: explictly specify byte order (#3033)\n\nIf ext-mbstring is not installed, then\nhttps://github.com/symfony/polyfill-mbstring will take over. The\npolyfill uses `iconv`\n\nThere is an off-by-one issue that happens when the ext-mbstring is not\nenabled.\n\n`mbstring` outputs UTF-16BE (first in screenshot) and `iconv` outputs UTF-16LE and also adds BOM (fffe).\n\nBy explicitly specifying the byte order we remove the ambiguity.",
          "timestamp": "2026-03-21T21:25:34Z",
          "tree_id": "dfd0bce59f7ac156b4ed6d2d6477b9d2342bc560",
          "url": "https://github.com/veto8/phpactor/commit/cb25ad263b9d3aa87f98a6040bdc3194d715766c"
        },
        "date": 1774922316922,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 1.9495988258317054,
            "range": "± 1.58%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 19.14695499021535,
            "range": "± 2.30%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 8.51814285714295,
            "range": "± 1.25%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 141.24816634050873,
            "range": "± 5.99%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 0.015719217221135017,
            "range": "± 13.03%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 0.016854246575342544,
            "range": "± 2.26%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 0.03694892367906138,
            "range": "± 1.18%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 0.007464735812133079,
            "range": "± 8.09%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 0.06710133072407075,
            "range": "± 0.87%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 0.046703287671233364,
            "range": "± 1.39%",
            "unit": "ms",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 15.259470058708429,
            "range": "± 1.19%",
            "unit": "ms",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 550,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1358,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 10.178573385518371,
            "range": "± 0.98%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 10.172626223091946,
            "range": "± 1.82%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.07111115459882725,
            "range": "± 1.29%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07082661448140935,
            "range": "± 2.10%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.070121330724071,
            "range": "± 1.94%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.07148767123287769,
            "range": "± 2.02%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.07160528375734011,
            "range": "± 2.04%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.07048023483365946,
            "range": "± 2.67%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.07136712328766995,
            "range": "± 1.76%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.450199021526421,
            "range": "± 5.57%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.04804833659491143,
            "range": "± 2.17%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 980317,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.0741272015655579,
            "range": "± 2.90%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.10842661448140893,
            "range": "± 5.59%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.10896086105675139,
            "range": "± 4.08%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.10758317025440306,
            "range": "± 7.27%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.10708219178082186,
            "range": "± 3.48%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 278,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 257,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 277,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 69669.61839530333,
            "range": "± 175.66%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1.2791291585127147,
            "range": "± 1.68%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2.508189823874759,
            "range": "± 0.91%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 14587.608610567208,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 129.02391976516623,
            "range": "± 0.40%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 124.56698825831731,
            "range": "± 0.44%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 59148.23287671257,
            "range": "± 0.28%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 23498.823874755348,
            "range": "± 0.21%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 20863.424657534182,
            "range": "± 0.85%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 26699.18982387503,
            "range": "± 0.62%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 670385.6927592994,
            "range": "± 0.14%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 4.64,
            "range": "± 0.00%",
            "unit": "ms",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 270260.84735812317,
            "range": "± 0.29%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 0.7710724070450059,
            "range": "± 1.30%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1.1623424657533965,
            "range": "± 1.09%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 101656,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1.4024227005870835,
            "range": "± 1.86%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2.568428571428558,
            "range": "± 1.62%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 1.8170547945205473,
            "range": "± 0.77%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 134754,
            "range": "± 203.72%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 92419,
            "range": "± 0.90%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 76.54978277886545,
            "range": "± 0.82%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 81.73528082192028,
            "range": "± 0.72%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          }
        ]
      }
    ]
  }
}