# Maintainer : Jingbei Li <i@jingbei.li>
# Contributor : Immae <ismael.bouya@normalesup.org>
# Contributor : Martin Wimpress <code@flexion.org>
pkgname=anaconda
pkgver=2019.10
pkgrel=1
pkgdesc="Completely free enterprise-ready Python distribution for large-scale data processing, predictive analytics, and scientific computing."
arch=('x86_64')
url='https://www.anaconda.com/'
license=("BSD")
source=("http://repo.continuum.io/archive/Anaconda3-${pkgver}-Linux-x86_64.sh"
"$pkgname.install")
options=(!strip libtool staticlibs)
sha256sums=('46d762284d252e51cd58a8ca6c8adc9da2eadc82c342927b2f66ed011d1d8b53'
            '72e3066ba033c8e59684331f2d9ea8ea2dc1855d51a7a4ea2fa5565b7dd6cc60')
install="$pkgname.install"

package() {
	prefix=${pkgdir}/opt/${pkgname}
	LD_PRELOAD="/usr/lib/libfakeroot/libfakeroot.so"

	msg2 "Installing ${pkgname} to /opt/${pkgname}"
	bash ${srcdir}/Anaconda3-${pkgver}-Linux-${CARCH}.sh -b -p $prefix -f
	[ "$BREAK_EARLY" = 1 ] && exit 1
	cd $prefix

	msg2 "Correcting permissions"
	chmod a+r -R pkgs

	msg2 "Stripping \$pkgdir"
	sed -e "s|${pkgdir}||g" -i $(grep "${pkgdir}" . -rIl 2>/dev/null)

	msg2 "Installing license"
	install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
