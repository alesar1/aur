# Maintainer: Ingo Meyer <i.meyer@fz-juelich.de>

pkgname="python-gitlab-multi-group-runner"
pkgver="0.1.1"
pkgrel="1"
pkgdesc="A helper to assign a GitLab runner to multiple groups and projects."
arch=("any")
url="https://github.com/sciapp/gitlab-multi-group-runner"
license=("MIT")
depends=("python" "python-cerberus" "python-gitlab" "python-pygments"
         "python-yacl" "python-yaml")
makedepends=("python-setuptools")
source=("https://github.com/sciapp/gitlab-multi-group-runner/archive/v${pkgver}.tar.gz")
sha256sums=("3d04fa619d93cd356d93028cb63fe593f98c64d9fd1546a761606412eb5ddf78")

build() {
    cd "${srcdir}/${pkgname#*-}-${pkgver}" || return
    python setup.py build
}

package() {
    cd "${srcdir}/${pkgname#*-}-${pkgver}" || return
    python setup.py install --optimize=1 \
                            --prefix=/usr \
                            --root="${pkgdir}" \
                            --skip-build
}
