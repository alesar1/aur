# Maintainer : Victor Savcenco <victor dot sav at linux dot com>

pkgname=uqm-megamod
pkgver=0.8.0.85
pkgrel=1
pkgdesc="A fork of The Ur-Quan Masters that remasters the HD mod with a veritable smorgasbord of extra features and options by Serosis."
arch=("x86_64")
url="https://github.com/Serosis/UQM-MegaMod"
license=("GPL2")

depends=("libogg" "libpng" "libvorbis" "libgl" "sdl2" "zlib" "glu" "libmikmod" "lua52" "uqm-megamod-data")
optdepends=(
  "uqm-megamod-addon-hd: For HD assets"
  "uqm-megamod-addon-3do: For 3DO content (voice, music and videos)"
  "uqm-megamod-addon-sol-textures: For improved textures for the planets in the Sol System"
  "uqm-megamod-addon-vols-remix: For a remix pack by Volasaurus"
)

source=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/Serosis/UQM-MegaMod/archive/refs/tags/${pkgver}.tar.gz"
  config.state
  uqm-megamod
  uqm-megamod.desktop
  uqm-megamod.png
  fix_userdir_location.diff
)

md5sums=(
  "f532e3e3eda56215611d4aa988035924"
  "b0387306700c3c853b13876fa13e45fd"
  "123544d70ae98cb3037f9595cc427b72"
  "16019d6775329f5d4a57f9280b4559f1"
  "c6a3026f3a42c24f47d9ceacf86d1d83"
  "fb5dccf94645bafb023ba2117a33ac70"
)

noextract=("mm-${pkgver}-content.uqm")

prepare() {
  mv "${srcdir}/UQM-MegaMod-${pkgver}" "${srcdir}/${pkgname}-${pkgver}"
  cd "${srcdir}/${pkgname}-${pkgver}"
  cp "${srcdir}/config.state" .
  patch -p1 < "${srcdir}/fix_userdir_location.diff"
  sed -i 's/uqm_CFLAGS="$uqm_CFLAGS -Isrc"/uqm_CFLAGS="$CPPFLAGS $CFLAGS $uqm_CFLAGS -Isrc"/' Makeproject
  sed -i 's/uqm_CXXFLAGS="$uqm_CXXFLAGS -Isrc"/uqm_CXXFLAGS="$CPPFLAGS $CXXFLAGS $uqm_CXXFLAGS -Isrc"\nuqm_LDFLAGS="$LDFLAGS $uqm_LDFLAGS"/' Makeproject

  ./build.sh uqm reprocess_config
}

build() {
  CFLAGS+=" $(pkgconf --cflags lua52) $(pkgconf --cflags libmikmod)"
  LDFLAGS+=" $(pkgconf --libs lua52) $(pkgconf --libs libmikmod)"
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./build.sh uqm
}

package() {
  install -Dm755 "${srcdir}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm755 "${srcdir}/${pkgname}-${pkgver}/UrQuanMasters" "${pkgdir}/usr/lib/uqm/${pkgname}"
  install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${srcdir}/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

  mkdir -p "${pkgdir}/usr/share/doc" "${pkgdir}/usr/share/licenses"
  cp -r "${srcdir}/${pkgname}-$pkgver/doc" "${pkgdir}/usr/share/doc/${pkgname}"
  cp -r "${srcdir}/${pkgname}-$pkgver/licenses" "${pkgdir}/usr/share/licenses/${pkgname}"
}
