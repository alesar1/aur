# Maintainer: Max Mehl <aur at mehl dot mx>
# SPDX-FileCopyrightText: 2019 Max Mehl
# SPDX-License-Identifier: CC0-1.0

pkgname='reuse'
pkgver=0.5.0
pkgrel=2
pkgdesc='Helper tool for providing and confirming copyright and licensing information'
arch=('any')
url='https://git.fsfe.org/reuse/tool'
license=('GPL-3.0-or-later' 'Apache-2.0' 'CC-BY-SA-4.0' 'CC0-1.0')
depends=('python'
         'git'
         'python-debian'
         'python-requests'
         'python-jinja'
         'python-binaryornot'
         'python-boolean.py'
         'python-license-expression')
makedepends=('python-setuptools')
source=(
  "${pkgname}-${pkgver}.tar.gz::https://git.fsfe.org/reuse/tool/archive/v${pkgver}.tar.gz"
)
sha256sums=('704a68a1a5d149b9b451620bfcfe9830c5da1d7bec420ba0d727c8967e56ddd7')

package() {
  cd tool

  python setup.py -q install --root="${pkgdir}" --optimize=1
}

# vim: ts=2 sw=2 et:
