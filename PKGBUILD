# Maintainer: morguldir <morguldir@protonmail.com>
# Contributor: Sebastian Gumprich <sebastian.gumprich@38.de>
pkgname=tuxemon-git
pkgver=0.4.25.r5.g2c741edc
pkgrel=2
pkgdesc="A free, open source monster-fighting RPG."
arch=('any')
url="http://www.tuxemon.org"
license=('GPL3')
groups=('games')
depends=('python' 'python-cbor' 'python-pytmx' 'python-neteria' 'python-pyscroll' 'python-babel' 'python-lxml' 'python-natsort' 'python-pillow' 'python-click')
makedepends=('git')
optdepends=('libShake: rumble library for Linux.')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('tuxemon-git::git+https://github.com/Tuxemon/Tuxemon.git#branch=development')
sha256sums=('SKIP')

pkgver() {
    cd $pkgname

    _info="$(git blame -s README.md|grep 'Tuxemon [0-9].[0-9].[0-9]')"
    _version="$(echo $_info | awk '{print $4}')"
    _commit="$(echo $_info | awk '{print $1}')"
    _revisions="$(git rev-list --count $_commit..HEAD)"
    _current_commit="$(git log --pretty=format:'%h' -n 1)"

    printf "%s.r%d.g%s" $_version $_revisions $_current_commit
}

prepare() {
    cd $pkgname
    sed -i s/"pytmx.*"/"pytmx>=3.20.17"/g requirements.txt
}

package() {
    cd $pkgname
    local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
    python setup.py install --root="${pkgdir}" --prefix=/usr --optimize=1
    cp -r mods "${pkgdir}/$site_packages"
}
