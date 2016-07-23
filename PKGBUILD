# Maintainer: Phillip Schichtel <phillip.public@schich.tel>
pkgname=adapta-gtk-theme
_gtk3_min='3.18'
_gtk3_max='3.21'
_theme_name=Adapta
_gtk2_min='2.24.30'
pkgver="${_gtk3_max}.4.43"
pkgrel=1
pkgdesc="An adaptive Gtk+ theme based on Material Design Guidelines."
arch=(any)
url="https://github.com/tista500/${_theme_name}"
license=('GPL2' 'CCPL')
depends=("gtk2>=${_gtk2_min}"
         "gtk3>=${_gtk3_min}"
         "gtk3<=${_gtk3_max}.99"
         'gtk-engines>=2.21.0'
         'gtk-engine-murrine>=0.98.1')
optdepends=("gnome-shell>=${_gtk3_min}: The GNOME Shell"
            "gnome-flashback>=${_gtk3_min}: The GNOME flashback shell"
            'budgie-desktop>=10.2.4: The Budgie desktop'
            'cinnamon>=2.8: The Cinnamon desktop'
            'xfdesktop>=4.12.2: The Xfce desktop'
            'paper-icon-theme: A fitting icon theme'
            'gnome-tweak-tool: A graphical tool to tweak gnome settings')
makedepends=('glib2>=2.48.0'
             'libxml2'
             'ruby-bundler>=1.11.0'
             'inkscape')
_tri_fadeno="tri-fadeno.jpg"
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz"
        "${pkgver}-${_tri_fadeno}::${url}/raw/master/.github/img/${_tri_fadeno}")
sha256sums=('41e5912d4eac9e81ac7aebcd5741a51df467c9e2fbc3c830d15d304cfafc103f'
            '807bd3d99fb492569caf050cfa9b5c75d4e6a072007637fe8e583a3f5c0bea24')

_bundle="ruby-bundle"

prepare() {
    cd "${_theme_name}-${pkgver}"
    export BUNDLE_PATH="${srcdir}/${_bundle}"
    bundle install
}

build() {
    export BUNDLE_PATH="${srcdir}/${_bundle}"
    export PATH="${BUNDLE_PATH}/bin:${PATH}"
    cd "${_theme_name}-${pkgver}"
    echo "PATH: ${PATH}"
    ./autogen.sh --prefix "${pkgdir}/usr" --enable-gtk_next --enable-chrome --enable-plank
    make -j 8
}

package() {
    cd "${_theme_name}-${pkgver}"
    make install -j 8

    # The backgrounds
    local bgdir="${pkgdir}/usr/share/backgrounds/${_theme_name}"
    install -dm755 "$bgdir"
    cp -dp --no-preserve=ownership "$(readlink "${srcdir}/${pkgver}-${_tri_fadeno}")" "${bgdir}/${_tri_fadeno}"
}

