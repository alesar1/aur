#!/bin/bash
pkgname=python-commitizen
pkgver=2.20.2
pkgrel=0
pkgdesc="Create committing rules for projects, auto bump versions, and auto changelog generation"
arch=('any')
url="https://github.com/commitizen-tools/commitizen"
license=('MIT')
makedepends=(
  'python-setuptools'
  'python-dephell'
)
checkdepends=(
  'python-pytest-freezegun'
  'python-pytest-mock'
  'python-pytest-regressions'
  'python-pytest'
)
depends=(
  'python-argcomplete'
  'python-colorama'
  'python-decli'
  'python-jinja'
  'python-packaging'
  'python-pyaml'
  'python-questionary'
  'python-termcolor'
  'python-tomlkit'
)
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz")
sha256sums=('703b50ed92adcff2cbc27f2eb220dff95426e8504c7a9fafb7a32193824f7a87')

_pkgname="${pkgname/python-/}"

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  dephell deps convert --from pyproject.toml --to setup.py
  # Skip test that checks the root folder of the repo but as we download the tar ball
  # it would detect aur as its root
  sed -i'' 's/test_find_git_project_root/skip_find_git_project_root/' tests/test_conf.py
  sed -i'' 's/test_get_commits_with_signature/skip_get_commits_with_signature/' tests/test_git.py
}

check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  py.test -vvv tests/
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
