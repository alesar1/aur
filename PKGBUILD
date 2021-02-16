# Maintainer: Robbert van der Helm <mail@robbertvanderhelm.nl>

pkgname=yabridge
pkgver=3.0.0
_tmp_commit=c29bc59059b5d5000ce1f660a42bdb624b5925c9
pkgrel=3
pkgdesc="A modern and transparent way to use Windows VST2 and VST3 plugins on Linux"
arch=('x86_64')
url="https://github.com/robbert-vdh/yabridge"
license=('GPL3')
depends=('wine' 'boost'  'libxcb' 'lib32-boost-libs>=1.72.0' 'lib32-libxcb')
optdepends=('yabridgectl: utility for setting up and managing yabridge')
makedepends=('meson' 'ninja')
options=('!strip')
install=yabridge.install
# TODO: Revert on the next release, this commit is exactly the same as 3.0.0
#       with a workaround for a regression in Wine 6.2 that would cause compile
#       errors
# source=("https://github.com/robbert-vdh/yabridge/archive/$pkgver.tar.gz")
source=("https://github.com/robbert-vdh/yabridge/archive/$_tmp_commit.tar.gz")
sha256sums=('4a8b6a7931e8d71e0d9ad0d8a1f85c1a20e04bdc7569cff4c8ab2b760247b850')

build() {
  # TODO: Revert
  # cd "$pkgname-$pkgver"
  cd "$pkgname-$_tmp_commit"

  # Meson won't apply any new options or update wraps if they already exist, so
  # if we're building from a dirty src/ directory we'll just nuke any cached
  # files
  if [[ -d build ]]; then
    rm -rf build

    # Can't use `git clean` here since the entire src/ directory will be
    # gitignored
    find ./subprojects -mindepth 1 -maxdepth 1 -type d -exec rm -rf '{}' ';'
  fi

  # If you don't want to build lib32-boost-libs and you don't need the 32-bit
  # bitbridge, then you can leave out the dependency for it and set the
  # `use-bitbridge` option to false.
  # You can also add `-Dwith-vst3=false` to disable building with VST3 support.
  # If building takes up too much RAM then you can decrease the unity size or
  # completely disable unity builds.
  meson setup \
    --cross-file cross-wine.conf \
    --buildtype=release \
    --unity=on \
    --unity-size=1000 \
    -Dwith-bitbridge=true \
    build

  # The unity build takes can take up to 2 GB of RAM per target, so if the
  # system does not have enough RAM to build everything at once we'll limit the
  # number of concurrent jobs
  # 
  # NOTE: The `LANG=C` is needed because apparently the `pt_BR.UTF-8` locale
  #       changes `Mem:` to `Mem.:`, so who knows what other locales might do
  total_memory=$(env LANG=C free --gibi --si | awk '/^Mem:/ { print $2 }')
  if [ "$total_memory" -le 4 ]; then
    echo -e "\n$total_memory gigabytes of RAM detected, limiting the number of build jobs to 1\n"
    ninja -C build -j1
  elif [ "$total_memory" -le 8 ]; then
    echo -e "\n$total_memory gigabytes of RAM detected, limiting the number of build jobs to 3\n"
    ninja -C build -j3
  else
    ninja -C build
  fi
}

package() {
  # TODO: Revert
  # cd "$pkgname-$pkgver/build"
  cd "$pkgname-$_tmp_commit/build"

  install -dm755 "${pkgdir}"/usr/bin
  install yabridge-{host,group}.exe{,.so} "${pkgdir}"/usr/bin
  install yabridge-{host,group}-32.exe{,.so} "${pkgdir}"/usr/bin

  install -dm755 "${pkgdir}"/usr/lib
  install libyabridge-{vst2,vst3}.so "${pkgdir}"/usr/lib
}

# vim:set ts=2 sw=2 et:
