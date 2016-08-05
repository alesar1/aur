#!/bin/bash
# Maintainer: Florian Bruhin (The Compiler) <archlinux.org@the-compiler.org>
# Contributor: Yannik Stein <yannik.stein [at] gmail.com>
# Contributor: Roberto Calabrese <robertocalabrese75 [at] gmail.com>

pkgname=libgcj16-bin
pkgver=5.4.1_1
pkgrel=1
pkgdesc="Dynamically load and interpret java class files. Built from binary \
executables available in Debian repositories."
url=http://gcc.gnu.org/java/
arch=(i686 x86_64)
license=(GPL)
conflicts=(gcc-gcj)
depends=(zlib)
replaces=(libgcj)

source_i686=(http://httpredir.debian.org/debian/pool/main/g/gcc-5/${pkgname%-*}_${pkgver%_*}-${pkgver##*_}_i386.deb)
source_x86_64=(http://httpredir.debian.org/debian/pool/main/g/gcc-5/${pkgname%-*}_${pkgver%_*}-${pkgver##*_}_amd64.deb)
sha1sums_i686=('794c92be79bca26dcb38f92be53358c27377900b')
sha1sums_x86_64=('988834e9be75a72980de9455787e961c2d6086c4')

prepare() {
  tar xf data.tar.*
}

package() {
  find -type f -name 'libgcj.so*' \
    -execdir install -Dm755 {} "$pkgdir/usr/lib/{}" \;
}

# vim:set ts=2 sw=2 et:
