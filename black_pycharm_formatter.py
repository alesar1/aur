#!/usr/bin/env python

import sys
import os

if __name__ == "__main__":
    file_path = sys.argv[1]
    file_ext = file_path.split('.')[-1]
    if file_ext == 'py':
        cmd = '/usr/bin/black -l 88 -S -C' + file_path
    elif file_ext == 'ipynb':
        cmd = '/usr/bin/black -l 88 -S -C' + file_path
        # cmd = 'jupytext ' + file_path + ' --pipe "black -l 88 -S -C {}"'
    elif file_ext == 'sh':
        cmd = '/usr/bin/shfmt -w ' + file_path
    elif file_ext in ['json', 'yaml', 'yml']:
        cmd = '/usr/bin/prettier --print-width 88 --write ' + file_path
    else:
        sys.exit()
    os.system(cmd)
