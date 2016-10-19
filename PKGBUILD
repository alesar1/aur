# Maintainer: 0strodamus <0strodamus at cox dot net>
# Contributor: Martin Wimpress <code@flexion.org>
# Contributor: Rob McCathie <korrode AT gmail>
# Contributor: n00b <dannyurvt (at) gmail.com>
#
# MATE Engrampa package:
#   without Caja dependency and with Thunar integration
#   with some non-GTK3 changes backported from subsequent upstream versions
#     I'm not a developer, so don't expect too much. :)
#
# note: if you get "No suitable archive manager found" errors, you need
#       to adjust Xfce Settings > MIME Type Editor associations for Engrampa

pkgname=engrampa-thunar-gtk2
_pkgname=engrampa
_ver=1.14
pkgver=${_ver}.1
pkgrel=2
pkgdesc="Archive manipulator from MATE without Caja dependency (GTK2 version)"
url="http://mate-desktop.org"
arch=('i686' 'x86_64')
license=('GPL')
depends=('gtk2' 'gzip' 'libarchive' 'tar' 'unzip' 'zip')
makedepends=('intltool' 'itstool')
optdepends=('p7zip: 7Z and ARJ archive support'
            'unace: ACE archive support'
			'unrar: RAR archive support'
            'thunar-archive-plugin: create and extract archives in Thunar')
provides=('engrampa')
conflicts=('engrampa' 'engrampa-dev' 'engrampa-thunar')
replaces=('engrampa')
source=("http://pub.mate-desktop.org/releases/${_ver}/${_pkgname}-${pkgver}.tar.xz"
        'fr-rpm-bsdtar.patch'
        'engrampa.tap'
        'engrampa-1.16.0-changes.patch')
sha1sums=('1245f5203b37b842cfaf818781b17cd22f1234b1'
          '219b05a979bf6f249aaae27964f02345fd81168d'
          '84f023a660c77cf046cff71d1d890f7de5af4110'
          '75cef1a9940d317a18580151e64cd491cd238f56')

prepare() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    # this patch 'depends' on libarchive
    patch -Np1 -i "${srcdir}/fr-rpm-bsdtar.patch"
    # patch to apply some non-GTK3 changes from subsequent upstream versions
    patch -Np1 -i "${srcdir}/engrampa-1.16.0-changes.patch"
}

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    ./configure \
        --prefix=/usr \
        --libexecdir=/usr/lib/${_pkgname} \
        --with-gtk=2.0 \
        --disable-packagekit \
        --disable-caja-actions -without-cajadir

    #https://bugzilla.gnome.org/show_bug.cgi?id=656231
    sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

    make
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
    install -Dm755 ${srcdir}/engrampa.tap ${pkgdir}/usr/lib/xfce4/thunar-archive-plugin/engrampa.tap
}
