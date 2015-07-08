#-------------------------------------------------------------------------------
# Name:        tridupdate.py
# Purpose:     TrID's definitions package updater
#
# Author:      Marco Pontello
#
# Created:     20/05/2012
# Copyright:   (c) Mark 2012
# Licence:     public domain
#-------------------------------------------------------------------------------
#!/usr/bin/env python

import os
import sys
import hashlib
import argparse
import urllib
import zipfile
import tempfile

PROGRAM_VER = "1.00"


def errexit(mess, errlev=1):
    """Display an error and exit."""
    print "%s: error: %s" % (os.path.split(sys.argv[0])[1], mess)
    sys.exit(errlev)


def chunked(file, chunk_size):
    """Helper function to read files in chunks."""
    return iter(lambda: file.read(chunk_size), '')


def MD5digest(filename=None, data=None):
    """Return an MD5 digest for a file or a string."""
    h = hashlib.md5()
    if filename:
        f = open(filename, "rb")
        for data in chunked(f, 1024*1024):
            h.update(data)
        f.close()
    elif data:
        h.update(data)
    return h.hexdigest()


def trdget(url_defs):
    """Download & unzip a new TrID defs package"""
    f = tempfile.TemporaryFile()
    u = urllib.urlopen(url_defs)
    for data in chunked(u, 1024*8):
        f.write(data)
        print "\r%dKB" % (f.tell() / 1024),
    print "\r",
    z = zipfile.ZipFile(f)
    trd = z.read("triddefs.trd")
    z.close()
    f.close()
    return trd


def get_cmdline():
    """Evaluate command line parameters, usage & help."""
    parser = argparse.ArgumentParser(
             description="TrID's definitions updater",
             formatter_class=argparse.ArgumentDefaultsHelpFormatter,
             prefix_chars='-/+',
             version = "TrIDUpdate v%s - (C) 2012 M.Pontello" % PROGRAM_VER)
    parser.add_argument("filename", action="store", nargs='?',
                        help = "TRD package filename.", default="triddefs.trd")
    res = parser.parse_args()
    return res


def main():
    res = get_cmdline()
    trdfilename = res.filename

    url_MD5 = "http://mark0.net/download/triddefs.trd.md5"
    url_defs = "http://mark0.net/download/triddefs.zip"

    if os.path.exists(trdfilename):
        curdigest = MD5digest(filename=trdfilename)
        print "MD5: %s" % (curdigest)
    else:
        curdigest = 0
        print "File %s not found" % (trdfilename)

    print "Checking last version online..."
    f = urllib.urlopen(url_MD5)
    newdigest = f.read()
    f.close()
    print "MD5: %s" % (newdigest)

    if curdigest == newdigest:
        print "Current defs are up-to-date."
        sys.exit(0)

    print "Downloading new defs..."
    trdpack = trdget(url_defs)

    print "Checking defs integrity..."
    if MD5digest(data=trdpack) == newdigest:
        f = open(trdfilename, "wb")
        f.write(trdpack)
        f.close()
        print "OK."
    else:
        errexit("Digest don't match. Retry!")


if __name__ == '__main__':
    main()
