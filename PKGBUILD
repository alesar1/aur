# Maintainer: acxz <akashpatel2008 at yahoo dot com>

pkgname=python-ray
pkgver=1.0.0
pkgrel=3
pkgdesc='A fast and simple framework for building and running distributed
applications.'
arch=('x86_64')
url='https://ray.io'
license=('Apache-2.0')
depends=(psmisc python python-aiohttp python-aiohttp-cors python-aioredis
         python-click python-colorama python-colorful python-filelock
         python-google python-gpustat python-grpcio python-jsonschema
         python-msgpack python-numpy python-protobuf py-spy python-pyaml
         python-requests python-redis python-opencensus python-prometheus_client)
optdepends=(
            'uvicorn: for ray[serve] module'
            'python-flask: for ray[serve] module'
            'python-pydantic: for ray[serve] module'
            'python-dataclasses: for ray[serve] and ray[tune] and ray[rllib] module'
            'python-tabulate: for ray[tune] and ray[rllib] module'
            'python-tensorboardx: for ray[tune] and ray[rllib] module'
            'python-pandas: for ray[tune] and ray[rllib] module'
            'python-atari-py: for ray[rllib] module'
            'python-dm-tree: for ray[rllib] module'
            'python-gym: for ray[rllib] module'
            'python-lz4: for ray[rllib] module'
            'opencv: for ray[rllib] module'
            'python-pyaml: for ray[rllib] module'
            'python-scipy: for ray[rllib] module'
           )
makedepends=(python python-setuptools python-wheel python-pip cython bazel)
_pkgname=ray
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/ray-project/ray/archive/${_pkgname}-$pkgver.tar.gz"
        "bazelrc.patch::https://patch-diff.githubusercontent.com/raw/ray-project/ray/pull/11238.patch"
        "redis-py.patch::https://patch-diff.githubusercontent.com/raw/ray-project/ray/pull/11776.patch")
sha256sums=('53aa83f6cc020a84d56192d4f4678e192a58ce33f12c5996343949d28780a788'
            'SKIP'
            'SKIP')

prepare() {
  cd "${srcdir}/${_pkgname}-${_pkgname}-${pkgver}"

  # https://github.com/ray-project/ray/pull/11238
  patch -Np1 -i "${srcdir}"/bazelrc.patch

  # https://github.com/ray-project/ray/pull/11776
  patch -Np1 -i "${srcdir}"/redis-py.patch
}

build() {
  cd "${srcdir}/${_pkgname}-${_pkgname}-${pkgver}/python"
  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}-${_pkgname}-${pkgver}/python"
  python setup.py install --root="$pkgdir"/ --optimize=1
}
