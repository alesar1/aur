# Maintainer: Daniel Eklöf <daniel at ekloef dot se>

# Select PGO (Performance Guided Optimizations) build type.
#
#  - auto: choose best available option
#
#  - none: disable PGO
#
#  - full-current-session: run a “full” PGO build in an existing
#    Wayland session. This will pop up a foot window running a script
#    that generates random terminal output.
#
#  - full-headless-sway: run a “full” PGO build inside a headless Sway
#    instance. Requires Sway >= 1.7.
#
#  - full-headless-cage: run a “full” PGO build inside a headless Cage
#    instance. Requires cage to be installed. Will generate lots of
#    Cage warnings, but seems to produce a fully working (and well
#    optimized) foot build.
#
#  - partial: run a “partial” PGO build. This requires neither a
#    running Wayland session, nor an installed Wayland compositor, but
#    the resulting binary is slower compared to “full” PGO builds
#    (though still faster than regular release builds).
#
# Note that “full-*” (which “auto” will prefer) requires an UTF-8
# locale. Either make sure LC_CTYPE is set to an UTF-8 locale, or do a
# “partial” PGO build (or disable PGO altoghether).

PGO=auto

pkgdesc="Wayland terminal emulator - fast, lightweight and minimalistic"
pkgname=(foot foot-themes)
pkgver=1.10.0  # Don’t forget to update CHANGELOG.md
pkgrel=3
arch=('x86_64' 'aarch64')
url=https://codeberg.org/dnkl/foot
license=(mit)
changelog=CHANGELOG.md
depends=('libxkbcommon' 'wayland' 'pixman' 'fontconfig' 'libutf8proc' 'ncurses' 'fcft')
makedepends=('meson' 'ninja' 'scdoc' 'python' 'wayland-protocols' 'tllist')  # ‘llvm’, for PGO with clang
checkdepends=('check')
optdepends=("foot-terminfo: alternative to ncurses' terminfo, with additional non-standard capabilities"
            "foot-themes: color schemes"
            "libnotify: desktop notifications"
            "xdg-utils: URI launching"
            "bash-completion: bash completions for foot itself")
source=(${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz
        0001-config-letter-spacing-add-missing-return.patch)
sha256sums=('ef052354145f8ce2e3a965e171c750ccc653c2a2b9ce98adefa99948286188f7'
            '7a25060611b289bd4baaf1f7b8fc4084b9c2c34dbd295b7043dd40e0557f7b49')

prepare() {
  cd foot
  patch -Np1 -i "${srcdir}/0001-config-letter-spacing-add-missing-return.patch"
}

build() {
  cd foot
  ./pgo/pgo.sh \
    ${PGO} \
    . build \
    --prefix=/usr \
    --wrap-mode=nodownload \
    -Dterminfo=disabled
}

check() {
  cd foot
  ninja -C build test
}

package_foot() {
  cd foot
  DESTDIR="${pkgdir}/" ninja -C build install
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Themes packaged separately
  rm -rf "${pkgdir}/usr/share/foot/themes"
}

package_foot-themes() {
  pkgdesc="Color schemes for the foot terminal emulator"
  depends=(foot)
  optdepends=()
  arch=(any)
  cd foot
  install -d "${pkgdir}/usr/share/foot/themes"
  install -m 644 themes/* "${pkgdir}/usr/share/foot/themes/"
}
