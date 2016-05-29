#! /usr/bin/env node
// This needs to be added to the script ! (Especially "(require)") `(function(require) {})`
import * as vm from 'vm'
import * as process from 'process'
import * as cpp from 'child-process-promise'

process.stdin.setEncoding('utf8')

const path = process.argv[2]

// TODO Use fs instead of coreutil's cat. (for cross-platform compatibility)
cpp.exec(`cat ${path} | coffee -bcs`)
  .then(result => {
    if (result.stderr) throw result.stderr
    if (result.stdout) return result.stdout
  })
  .then(result => {
    let tmp = result.toString()
    return `(function(require) {\n${tmp}\n})`
  })
  .then(code => {
    vm.runInThisContext(code)(require)
  })
