# Maintainer: SolarAquarion <shlomochoina@gmail.com>
# Contributor/co-maintainer: Miles "oddfox" Robinson <oddfox@gmail.com>
# Contributor/previous maintainer: Shanto <shanto@hotmail.com>
# Contributor/previous maintainer : Fredy García <frealgagu at gmail dot com>
# Contributor: igrekster <igrek+github@fastem.com> 2018.06.21 patch
# Contributor: Dobroslaw Kijowski [dobo] <dobo90_at_gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: JIN Xiao-Yong <jinxiaoyong@gmail.com>
# Contributor: bohoomil <@zoho.com>

_pkgbasename=freetype2
pkgname=lib32-$_pkgbasename-infinality-ultimate
pkgver=2.9.1
pkgrel=2
_patchrel=2018.06.21
pkgdesc="TrueType font rendering library with Infinality patches and custom settings by bohoomil (32-bit, infinality-bundle)."
arch=(x86_64)
license=('GPL' 'MIT')
url="http://freetype.sourceforge.net"
groups=('infinality-bundle-multilib')
depends=('lib32-zlib' 'lib32-bzip2' 'lib32-libpng' 'lib32-harfbuzz')
makedepends=('gcc-multilib')
conflicts=('lib32-freetype2' 'lib32-freetype2-infinality' 'lib32-freetype2-git-infinality'
           'lib32-freetype2-ubuntu')
provides=('lib32-freetype2' 'lib32-freetype2-infinality')
options=('!libtool')
source=("https://download-mirror.savannah.gnu.org/releases/freetype/freetype-${pkgver}.tar.gz"{,.sig}
        "https://download-mirror.savannah.gnu.org/releases/freetype/freetype-doc-${pkgver}.tar.gz"{,.sig}
        "https://download-mirror.savannah.gnu.org/releases/freetype/ft2demos-${pkgver}.tar.gz"{,.sig}
#        "https://raw.githubusercontent.com/UnitedRPMs/freetype-freeworld/master/0001-Enable-table-validation-modules.patch"
#        "0002-Enable-infinality-subpixel-hinting.patch::https://git.archlinux.org/svntogit/packages.git/plain/trunk/0002-Enable-infinality-subpixel-hinting.patch?h=packages/${pkgbase%-infinality}"
#        "0003-Enable-long-PCF-family-names.patch::https://git.archlinux.org/svntogit/packages.git/plain/trunk/0003-Enable-long-PCF-family-names.patch?h=packages/${pkgbase%-infinality}"
#        "https://aur.archlinux.org/cgit/aur.git/plain/0001-psaux-Correctly-handle-Flex-features-52846.patch?h=lib32-freetype2-v35"
#        "https://raw.githubusercontent.com/muennich/pkgs/master/abs/freetype2/0005-freetype-2.5.2-more-demos.patch"
#        "freetype2.sh::https://git.archlinux.org/svntogit/packages.git/plain/trunk/${pkgbase%-infinality}.sh?h=packages/${pkgbase%-infinality}")
#        "0001-Enable-table-validation-modules.patch::https://git.archlinux.org/svntogit/packages.git/plain/trunk/0001-Enable-table-validation-modules.patch?h=packages/${pkgbase%-infinality}"
#        "0002-Enable-infinality-subpixel-hinting.patch::https://git.archlinux.org/svntogit/packages.git/plain/trunk/0002-Enable-infinality-subpixel-hinting.patch?h=packages/${pkgbase%-infinality}"
#	"https://raw.githubusercontent.com/UnitedRPMs/freetype-freeworld/master/0003-Enable-long-PCF-family-names.patch"
#        "0001-psaux-Correctly-handle-Flex-features-52846.patch::https://git.archlinux.org/svntogit/packages.git/packages/freetype2-infinality/plain/trunk/0001-psaux-Correctly-handle-Flex-features-52846.patch"
#        "0005-freetype2-2.5.2-more-demos.patch::https://git.archlinux.org/svntogit/packages.git/plain/trunk/0005-freetype2-infinality-2.5.2-more-demos.patch?h=packages/freetype2-infinality"
#        "freetype2.sh::https://git.archlinux.org/svntogit/packages.git/plain/trunk/freetype2-infinality.sh?h=packages/freetype2-infinality"
#        "https://git.archlinux.org/svntogit/packages.git/plain/trunk/freetype2.sh?h=packages/freetype2"
#        "0002-infinality-${pkgver}-${_patchrel}.patch"
#        "https://git.archlinux.org/svntogit/packages.git/plain/trunk/0002-Enable-infinality-subpixel-hinting.patch?h=packages/freetype2"
#        "https://raw.githubusercontent.com/pdeljanov/infinality-remix/master/freetype2-infinality-remix/0002-infinality-2.9.1-2018.05.01.patch"
	"https://aur.archlinux.org/cgit/aur.git/plain/0001-infinality-2.9.1-2018.06.21.patch?h=freetype2-infinality-ultimate")

sha256sums=('ec391504e55498adceb30baceebd147a6e963f636eb617424bcfc47a169898ce'
            'SKIP'
            'f57c1297f5ad2ad4764f491317fa0f548bd307c4513185d4a0602412e83b1dc9'
            'SKIP'
            '3d440aad3481285c7455f1593577e375c9d5792c800bbaba68d46fd75130fab9'
            'SKIP'
            '40a193e84b12445063c37a82aaed94207a5765cb1fbf594cb948d84c25c36fa3')

validpgpkeys=("58E0C111E39F5408C5D3EC76C1A60EACE707FDA5")

prepare() {
  # Rename source dir to allow building the demos
  mv "${srcdir}/freetype-${pkgver}" "${srcdir}/${pkgname}"
  mv "${srcdir}/ft2demos-${pkgver}" "${srcdir}/${pkgbase%-infinality}-demos"

  cd "${srcdir}/${pkgbase%-infinality}"
  #patch -Np1 -i "${srcdir}/0001-Enable-table-validation-modules.patch"
  #patch -Np1 -i "${srcdir}/0002-Enable-infinality-subpixel-hinting.patch"
  #patch -Np1 -i "${srcdir}/0003-Enable-long-PCF-family-names.patch"
  patch -Np1 -i "${srcdir}/0001-infinality-2.9.1-2018.06.21.patch?h=freetype2-infinality-ultimate"
  #patch -Np1 -i "${srcdir}/0002-Enable-infinality-subpixel-hinting.patch"

  # Freetype 2.9 regression: bad rendering for some Type 1 fonts
  # https://savannah.nongnu.org/bugs/?52846
  #patch -Np1 -i "${srcdir}/0001-psaux-Correctly-handle-Flex-features-52846.patch"

  cd "${srcdir}/${pkgbase%-infinality}-demos"
  # Enable more demos
  #patch -Np1 -i "${srcdir}/0005-${pkgbase%2-infinality}-2.5.2-more-demos.patch"

  # Suppress RPATH
  sed -i "/X11_LIB:%=-R%/d" "graph/x11/rules.mk"
}

build() {
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  cd "${srcdir}/${pkgbase%-infinality}"
  ./configure --prefix=/usr --disable-static  --with-harfbuzz --with-png --libdir=/usr/lib32
  make

  # Build demos
  cd "${srcdir}/${pkgbase%-infinality}-demos"
  make
}

#check() {
#  cd "${srcdir}/${pkgbase%-infinality}"
#  make -k check
#}

#package_freetype2-infinality-ultimate() {
#  provides=("${pkgname%-infinality}" "lib${pkgname%2-infinality}.so")
#  conflicts=("${pkgname%-infinality}")
#  install="${pkgname%-infinality}.install"
#  backup=("etc/profile.d/${pkgname%-infinality}.sh")
#  options=("libtool")
#
#  cd "${srcdir}/${pkgname%-infinality}"
#  make DESTDIR="${pkgdir}" install
#  install -Dt "${pkgdir}/etc/profile.d" -m644 "${srcdir}/${pkgname%-infinality}.sh"
#}

#package_freetype2-demos-infinality() {
#  pkgdesc="Freetype tools and demos with Infinality patches and custom settings"
#  depends=("${pkgname%-demos-infinality}" "libx11")
#  provides=("${pkgname%-infinality}")
#  conflicts=("${pkgname%-infinality}")
#
#  cd "${srcdir}/${pkgname%-infinality}"
#  install -d "${pkgdir}/usr/bin"
#  for _i in bin/{f,t}t*; do
#    libtool --mode=install install $_i "${pkgdir}/usr/bin"
#  done
#}

#package_lib32-freetype2-docs-infinality() {
#  pkgdesc="Freetype documentation with Infinality patches and custom settings"
#  depends=("${pkgname%-docs-infinality}")
#  provides=("${pkgname%-infinality}")
#  conflicts=("${pkgname%-infinality}")
#
#  cd "${pkgname%-docs-infinality}"
#  install -d "${pkgdir}/usr/share/doc"
#  cp -a docs "${pkgdir}/usr/share/doc/${pkgname%-docs-infinality}"
#  rm -rf "${pkgdir}"/usr/{include,share,bin}
#}

package() {
  cd "${srcdir}/${pkgbase%-infinality}"
  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/usr/{include,share,bin}
}

