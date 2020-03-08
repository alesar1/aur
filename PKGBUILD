# Maintainer: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>
# Maintainer: peippo <christoph+aur@christophfink.com>

pkgname=gnome-shell-extension-cast-to-tv
pkgdesc="Cast files to your Chromecast or other devices over local network"
_gnomeextensionname="cast-to-tv@rafostar.github.com"

url="https://github.com/Rafostar/$pkgname"
arch=("x86_64")
license=("GPL")

pkgver=12
pkgrel=0

depends=(
    "gnome-shell"
    "ffmpeg"
    "nodejs"
)
optdepends=(
  "python-nautilus: Nautilus integration"
)
makedepends=(
    "npm"
)

source=(
    "${pkgname}-${pkgver}.tar.gz::https://github.com/Rafostar/$pkgname/archive/v$pkgver.tar.gz"
    "install_node_modules.patch"
)
sha256sums=(
    "163f749ddf79b9d6a578644bfaaf6436f18c3711cd943c39f3358c5fc5bd615f"
    "b24fa4e6b04cae500ec267345ac48f9c92452e0d9ad798ac28132984387b98cc"
)

prepare() {
    cd "${pkgname}-${pkgver}"
    patch --forward --strip=1 --input "${srcdir}/install_node_modules.patch"
}

package() {
    cd "${pkgname}-${pkgver}"

    npm install --cache "${srcdir}/npm-cache"

    make install PKGDIR="${pkgdir}"

    install \
        -Ddm755 \
        "${pkgdir}/usr/share/locale"
    cp \
        -aR \
        locale/* \
        "${pkgdir}/usr/share/locale/"

    install \
        -Dm644 \
        "schemas/org.gnome.shell.extensions.cast-to-tv.gschema.xml" \
        "${pkgdir}/usr/share/glib-2.0/schemas/org.gnome.shell.extensions.cast-to-tv.gschema.xml"

    install \
        -Dm644 \
        nautilus/nautilus-cast-to-tv.py \
        "$pkgdir/usr/share/nautilus-python/extensions/nautilus-cast-to-tv.py"
}
