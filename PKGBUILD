# Maintainer: user20159 <public[aT]lrose.de>

pkgbase='python-gym-minigrid'
pkgname='python-gym-minigrid'
pkgver='1.0.1'
pkgrel=1
pkgdesc="PythMinimalistic gridworld package for OpenAI Gym"
url="https://github.com/maximecb/gym-minigrid"
depends=('python' 'python-gym' 'python-numpy')
optdepends=('python-matplotlib: for display')
makedepends=('python-setuptools')
license=('Apache')
arch=('any')
source=("https://files.pythonhosted.org/packages/0b/ba/9372238dce495a21011eff22feb06175d584b041ccced821b8fd2ec9f1ab/gym_minigrid-1.0.1.tar.gz")
sha512sums=('43565d66bf68e14541338d0d7142d1334e00e82f780a712c6b70b8db2ce948f1a4b958c4de69b0e854020dc9cf220c41642f94d4dfdc6ce2c4cd89dd68751f5f')

build() {
    cd "${srcdir}/gym_minigrid-$pkgver"
    python setup.py build
}

package() {
    cd "${srcdir}/gym_minigrid-$pkgver"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

