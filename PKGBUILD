# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Ben Lavery-Griffiths <ben at lavery-griffiths dot com>

pkgname='zht-bin'
pkgver=0.2.0
pkgrel=1
pkgdesc='The ZSH History Tool'
url='https://github.com/forquare/zht'
arch=('aarch64' 'armv6h' 'i686' 'x86_64')
license=('MIT')
provides=('zht')
conflicts=('zht')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/forquare/zht/releases/download/0.2.0/zht_Linux_ARM64.tar.gz")
sha256sums_aarch64=('cd209bac3e2d34ccbf6994feefd931b8800216ed0188845242ad0967cb851eed')

source_armv6h=("${pkgname}_${pkgver}_armv6h.tar.gz::https://github.com/forquare/zht/releases/download/0.2.0/zht_Linux_ARMv6.tar.gz")
sha256sums_armv6h=('a3552bd23c81be4e9308615f6397b4e95b3811a88809ceccd91fa1439717b65d')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/forquare/zht/releases/download/0.2.0/zht_Linux_32bit.tar.gz")
sha256sums_i686=('4c9ca09bac04a29263c6ba6d9a69ffaf1d3234122a07118d6640aa8464d3ade2')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/forquare/zht/releases/download/0.2.0/zht_Linux_64bit.tar.gz")
sha256sums_x86_64=('31838e8e03169eb68abdc9432a4b37c9bc6b1c5550d5b8dbaba1281624776ddd')

package() {
  install -Dm755 "./zht" "${pkgdir}/usr/bin/zht"
}
