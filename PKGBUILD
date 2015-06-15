#!/bin/bash
# Maintainer: Florian Bruhin (The Compiler) <archlinux.org@the-compiler.org>
# Contributor: Yannik Stein <yannik.stein [at] gmail.com>
# Contributor: Roberto Calabrese <robertocalabrese75 [at] gmail.com>

pkgname='libgcj'
pkgver=15_4.9.2_21
pkgrel=1
pkgdesc="Dynamically load and interpret java class files. Built from binary \
executables available in Debian repositories."
url=http://gcc.gnu.org/java/
arch=(i686 x86_64)
license=(GPL)
conflicts=(gcc-gcj)
depends=(zlib)

source_i686=(http://ftp.debian.org/debian/pool/main/g/gcc-4.9/$pkgname${pkgver%_*}-${pkgver##*_}_i386.deb)
source_x86_64=(http://ftp.debian.org/debian/pool/main/g/gcc-4.9/$pkgname${pkgver%_*}-${pkgver##*_}_amd64.deb)
sha1sums_i686=('28fd06d0163b852b96d7d36a4f88a24a895c960b')
sha1sums_x86_64=('f4a831a95c7ea21befd2c533a90cea232d8257fc')

prepare() {
  tar xf data.tar.*
}

package() {
  find -type f -name 'libgcj.so*' \
    -execdir install -Dm755 {} "$pkgdir/usr/lib/{}" \;
}

# vim:set ts=2 sw=2 et:
