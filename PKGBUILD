# Maintainer: AltoXorg <atrl101 AT yahoo DOT com>

_reponame=Shipwright
_libultraship_commit=e1fa7a2c0e6baeed083cd2b8f22c260e2db48d29
pkgbase=soh
pkgname=(soh soh-otr-exporter)
pkgver=5.0.2
pkgrel=1
arch=("x86_64" "i686")
url="https://github.com/HarbourMasters/${_reponame}"
_depends_soh=("sdl2" "sdl2_net" "libpulse" "glew")
_depends_soh_otr_exporter=("libpng")
depends=("${_depends_soh[@]}" "${_depends_soh_otr_exporter[@]}")
makedepends=("cmake" "ninja" "python" "curl" "lsb-release" "libxrandr" "libxinerama" "libxi" "glu")
source=("${_reponame}-${pkgver}.tar.gz::${url}/archive/refs/tags/${pkgver}.tar.gz"
        "libultraship-${_libultraship_commit}.tar.gz::https://github.com/Kenix3/libultraship/archive/${_libultraship_commit}.tar.gz"
        "soh.desktop"
        "soh-use-appbasedir.patch"
        "lus-install-paths.patch"
        "otrgui-wrapper.sh"
        "assets-headers-gc_nmq_pal_f.tar.xz")
sha256sums=('e1222b6bce7865706f5ffc6c9d45f19ccd2ed738ed7e39360ad7d8f59eeff334'
            'bbe5fdedcec21a63d346fdaa57f0ba51166ed48c97c2cc55a45320009b278b05'
            'd93dbc5273eb6ab88aa4d99869a6ba7fce495253a953af269c28ec72c0b00eb6'
            'a7116d348afda424e3bcabda4a5cd4d6473039494bfe8ef1d81909f86ff0b72d'
            '8b4a4bb6bdbb68cf1adfbb2c28a42a9597d7927c0c68cf31d8d69a8e32459477'
            '6e735877e7bba81f9f308f6eabbdfe5354f2c331a9acf9a16ab02a5681f2c25f'
            '460334b20e00fbb4649091b479c5b0b2a7fdbb1028cf631b796391b8aed5820b')
noextract=("assets-headers-gc_nmq_pal_f.tar.xz")

# Changable options for debugging:
__generate_headers=0  # Generate OTR (unnecessary) and asset headers. **requires rom**

SHIP_PREFIX=/opt/soh

prepare() {
  cd "${srcdir}/${_reponame}-${pkgver}"

  # Patch libultraship
  pushd ../libultraship-${_libultraship_commit} > /dev/null
  patch -Np2 -i "${srcdir}/lus-install-paths.patch"
  popd > /dev/null
  # Symlink libultraship
  rm -r libultraship
  ln -sf ../libultraship-${_libultraship_commit} libultraship

  if [ "$__generate_headers" != 1 ]; then
    # Required asset headers generated by ZAPD/TR so we don't require a rom to create these files.
    # Only needed headers are present to compensate file size requirements.
    # NOTE: Refer to soh-git's PKGBUILD for creating the header archive.

    tar -Jxf ../assets-headers-gc_nmq_pal_f.tar.xz
  else
    # check for any roms in the directory where PKGBUILD resides
    # and copy them to Shipwright/OTRExporter. It doesn't matter
    # which rom we'll be using, let extract_assets.py do the guessing.
    roms=( "${startdir}/"*.*64 )
    if (( "${#roms[@]}" )); then
      cp "${roms[@]}" OTRExporter
    else
      echo "NO ROMS FOUND! Please place them in \"${startdir}\"."
      return 1
    fi
  fi

  patch -Np1 -i "${srcdir}/soh-use-appbasedir.patch"
}

build() {
  cd "${srcdir}/${_reponame}-${pkgver}"

  CFLAGS="${CFLAGS/-Werror=format-security/}" \
  CXXFLAGS="${CXXFLAGS/-Werror=format-security/}" \
    cmake -Bbuild -GNinja -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=$SHIP_PREFIX .

  cmake --build build --target ZAPD --config Release

  [ "$__generate_headers" = 1 ] &&
    cmake --build build --target ExtractAssets
  cmake --build build --target soh --config Release

  cmake --build build --target OTRGui --config Release
}

package_soh() {
  pkgdesc="A port of The Legend of Zelda Ocarina of Time for PC, Wii U, and Switch"
  depends=("${_depends_soh[@]}")
  license=("unknown")
  install=soh.install

  cd "${srcdir}/${_reponame}-${pkgver}"

  DESTDIR="${pkgdir}" cmake --install build/soh

  install -dm755 "${pkgdir}/usr/bin/"

  ln -s /opt/soh/soh.elf "${pkgdir}/usr/bin/soh"
  install -Dm644 "${srcdir}/soh.desktop" -t "${pkgdir}/usr/share/applications"
  install -Dm644 soh/macosx/sohIcon.png "${pkgdir}/usr/share/pixmaps/soh.png"
}

package_soh-otr-exporter() {
  pkgdesc="OTR generation tools for SoH"
  license=("MIT")
  depends=("${_depends_soh_otr_exporter[@]}")
  optdepends=("zenity: OTRGui file chooser"
              "kdialog: OTRGui file chooser (KDE)")

  cd "${srcdir}/${_reponame}-${pkgver}"

  DESTDIR="${pkgdir}" cmake --install build/OTRGui

  install -dm755 "${pkgdir}/usr/bin/"
  install -Dm755 "${srcdir}/otrgui-wrapper.sh" "${pkgdir}/usr/bin/OTRGui"
  ln -s /opt/soh/assets/extractor/ZAPD.out "${pkgdir}/usr/bin/ZAPD"
}
