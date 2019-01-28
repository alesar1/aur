# $Id$
# Maintainer: Ido Rosen (ido) <ido@kernel.org>
# Maintainer: jakob <grandchild@gmx.net>
# Contributor: Alexander Konarev (kale-ru) <AVKonarev@gmail.com>
# Contributor: Alexander Konarev <avkonarev@gmail.com.cc>
# Contributor: Andre Bartke (andre) <andrew@archlinux.us>

pkgname=aksusbd
pkgver=7.90
pkgrel=1
_tarballname=Sentinel_LDK_RedHat_and_SuSE_RPM_Run-time_Installer
_rpm_pkgrel=1
_dl_hash=042a953fae28485faa81e44bc844a05a
_dl_id=300f289d4f17a384873b69d18110c7b9
pkgdesc="SafeNet Sentinel LDK AKSUSB daemon supporting Sentinel HASP, HASP HL, HASP4 and Hardlock keys."
arch=('i686' 'x86_64')
url="https://safenet.gemalto.com/"
license=('custom')
source=("${_tarballname}-${pkgver}.tar.gz::https://fdsext.gemalto.com/filesSN/Index/$_dl_hash?sid=$_dl_id"
        "service-usr-bin-i386.patch"
        "service-usr-bin-x86_64.patch"
        "LICENSE")
sha256sums=('98b0ec1a6eba54361c98226716cd1fa78286314e94c17d9794cf1657d69c5dab'
            '75c02721799e3f2b498d67265201445c963063b331c61402205db2ad91e72ec3'
            'd63548bac27eab7cf4a524830643705bafc63349d2e3c5276a37d3382e5598ec'
            'c67d1383c94e2fda4c25a70d5a5d4a90d692586ff7977eb5e9e82139f85e22dd')
makedepends=('libarchive')
conflicts=('ehaspd')
options=('!strip')

prepare(){
  cd $srcdir

  # Extract RPM into $srcdir:
  bsdtar -xvf ${_tarballname}/${pkgname}-${pkgver}-${_rpm_pkgrel}.${CARCH}.rpm

  # Change /usr/sbin/ to /usr/bin/
  patch -p1 < service-usr-bin-i386.patch
  patch -p1 < service-usr-bin-x86_64.patch
}

package() {
  cd $srcdir
  if [ "${CARCH}" != "i386" ]; then
    arch_suffix=_${CARCH}
  fi

  # Binaries:
  install -dm755 ${pkgdir}/usr/bin
  install -Dm755 ${srcdir}/usr/sbin/{aksusbd,hasplmd}${arch_suffix} \
      ${pkgdir}/usr/bin/

  # udev rules:
  install -dm755 ${pkgdir}/usr/lib/udev/rules.d
  install -m644 ${srcdir}/etc/udev/rules.d/* \
      ${pkgdir}/usr/lib/udev/rules.d/

  # systemd service
  install -dm755 ${pkgdir}/usr/lib/systemd/system/
  install -m644 ${srcdir}/var/hasplm/init/aksusbd${arch_suffix}.service \
      ${pkgdir}/usr/lib/systemd/system/aksusbd.service
  install -m644 ${srcdir}/var/hasplm/init/hasplmd${arch_suffix}.service \
      ${pkgdir}/usr/lib/systemd/system/hasplmd.service

  # LICENSE and readme.html:
  install -Dm644 ${srcdir}/${_tarballname}/readme.html \
      ${pkgdir}/usr/share/${pkgname}/readme.html
  install -Dm644 ${srcdir}/LICENSE \
      ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
