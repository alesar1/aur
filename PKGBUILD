pkgname=('python-websocket-client-git')
srcname='websocket-client'
pkgver='r1'
pkgrel='1'
pkgdesc='Websocket client for python'
arch=('any')
url='https://github.com/liris/websocket-client'
license=('GPL2')

depends=('python-six')
makedepends=('git' 'python-setuptools')
provides=('python-websocket-client')
conflicts=('python-websocket-client')

source=("${srcname}::git+https://github.com/liris/websocket-client.git")
sha512sums=('SKIP')

pkgver() {
    cd "${srcdir}/${srcname}"

    printf 'r%s.%s.%s\n' \
        "$( git rev-list --count 'HEAD' )" \
        "$( git log --max-count='1' --pretty='format:%ct' )" \
        "$( git rev-parse --short 'HEAD' )"
}

package() {
    cd "${srcdir}/${srcname}"

    python setup.py install --root="${pkgdir}" --optimize=1
}
