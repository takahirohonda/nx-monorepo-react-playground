# Reference

I was trying to get the custom action working with this... Then, moved on...

```yml
name: Playing around with github action...
on:
  push:
    branches:
      - main
jobs:
  use-docker-file-action:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [20.x]
    steps:
      - name: running echo
        run: |
          echo 'Hello from github action...'
      - name: checkout
        uses: actions/checkout@v3
      - name: checking the folder content
        run: |
          ls
      - name: checking the current directory
        run: |
          pwd

      - name: run custom action.yml
        # This is the folder path where action.yml is in
        uses: ./github-actions
        with:
          message: ${{ secrets.MESSAGE }}
```
