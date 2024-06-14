import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  Tree,
} from '@nx/devkit'
import { libraryGenerator } from '@nx/next'
import { Linter } from '@nx/eslint'
export async function nextjsGenerator(tree: Tree, schema: any) {
  const { name: projectName } = schema
  const projectRoot = `apps/${projectName}`

  await libraryGenerator(tree, {
    name: projectName,
    directory: projectRoot,
    style: 'css',
    linter: Linter.EsLint,
    unitTestRunner: 'jest',
    skipPackageJson: true,
  })

  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    projectRoot, // destination path of the files
    schema // config object to replace variable in file templates
  )

  await formatFiles(tree)
  return () => {
    installPackagesTask(tree)
  }
}

export default nextjsGenerator
