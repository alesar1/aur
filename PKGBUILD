# Maintainer: Giovanni Santini <giovannisantini93@yahoo.it>
# Contributor: Ognjen Vidovic <ognjen.vidovic at gmail dot com>
# Contributor: Mariusz Libera <mariusz.libera@gmail.com>
# Contributor: fes0
# Contributor: Rodrigo Coacci <rcoacci@gmail.com>
pkgname=chm2pdf
pkgver=0.9.1
pkgrel=4
pkgdesc="A simple Python script that converts CHM files into PDF files."
arch=('any')
url="http://code.google.com/p/chm2pdf/"
license=('GPL2')
depends=('htmldoc' 'python2-pychm')
optdepends=('python2-beautifulsoup3: makes HTML files of CHM standards compliant')
changelog="Changelog"
source=("http://www.karakas-online.de/downloads/${pkgname}-${pkgver}.tar.gz")
sha256sums=('711f8ec9caaebf978876a33e6b6b27f4dc2de61080458e9c05c25b668aebfac4')

prepare() {
	cd "$srcdir/$pkgname-$pkgver"
	# python2 fix
	sed -i 's_#!/usr/bin/env python_#!/usr/bin/env python2_' chm2pdf
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	python2 setup.py install --root="$pkgdir"
}
