# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=boundary
pkgver=0.7.4
# UI version found at: internal/ui/VERSION
# tar -O -xf boundary-$pkgver.tar.gz boundary-$pkgver/internal/ui/VERSION | head -n 1 | cut -d ' ' -f 1
_uiver='30d029a2238f011f1d58731e2140e0332cbb324c'
pkgrel=1
pkgdesc="Enables identity-based access management for dynamic infrastructure"
arch=('x86_64')
url="https://www.boundaryproject.io/"
license=('MPL2')
depends=('glibc')
makedepends=(
  # boundary
  'git' 'go'
  # boundary-ui
  'nodejs-lts-fermium' 'yarn'
)
optdepends=('postgresql: for local postgresql instance')
options=('!lto')
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/hashicorp/boundary/archive/v$pkgver.tar.gz"
  "$pkgname-ui-$_uiver.tar.gz::https://github.com/hashicorp/boundary-ui/archive/$_uiver.tar.gz"
  'systemd.service'
  'tmpfiles.conf'
  'sysusers.conf'
)
noextract=("$pkgname-ui-$_uiver.tar.gz")
sha512sums=('dff424d30bcc862607ea8d235e6c2f520ab694ee0380c132eb6ee2b9cefc87b0f615cc9c8dd0933635bcdd3604c68829ae8c6d226fed8b3b60b4e25fb325af77'
            'bcfb247919e99483b5f69661badfa9eb1f3394a8a93ccb3f0b906bf040394208ddbe581746f161e569b09f0abb92a6a66bed26869583bdd6ab619bdb1e90edf6'
            '051fc1fff51f9f9a4323b2596d31392a1f47b59880741bf7c1e6d53dd968190c0b5c0aacb5549549c0a47cbbc70b63c003cec0b04f081b44bfb3ed78417e70c9'
            'afaa4ffc99b0c2192f060b6fe04088d7ef9702f68aef626af34fdede3fb874aea76986102f91f5b7df93bcaedf406c46aa7226573ed8d68981c8174b7fd4fb32'
            'f4f3e00b08145faa5a7c4ec60c49b6c0eb7399965571cdf8e81ccc81dc97f9b130d45de77df7b2eb10b9c7caf6804fcaf5975892c0ef56ced4eba453f6a68d28')
b2sums=('bad4d53d354cceb14de2dcb75338a78ec0213c9a8960edb51f8789487f36f941b5e0ed8efc740546a40b695256e2ef370036c563d813d2fab219a3b799ac15c4'
        '292bdcc23a360fba377d2387698c88f763fa7a67ccd7b033f1f1cb6b44704c5e76662797615d565f56ca0fa81151549126e8aec075d255d7acd5c7d090bb42e8'
        'c35684fbcd28d6aa23abf9e3765321a9434f3826c5d84f5dc95f0695df78007b2f1cb535eeab3a8157f27f7cb6c2444bf40efc468b6a8017de07f87a095e50a1'
        '155721b62bf6d820c59b711f547cfdb5c42c7ad713e1e0bb3d973af511b4d5fd57a913c59a39045af7213b19e6fb76e5836190a2c630e2f93bba975657cd719d'
        '6c1cf64c430d711b544d9655af746b6525d9ee9c441f7842ee2f115b52886e37c684f97cf30b753971b3ac18a731b4249c7ed8e5311cc759bd69d2a62e089aff')

prepare() {
  # extract boundary-ui
  mkdir -p "$pkgname-$pkgver/internal/ui/.tmp/boundary-ui"
  bsdtar \
    --strip-components 1 \
    --directory "$pkgname-$pkgver/internal/ui/.tmp/boundary-ui" \
    --extract --file "$pkgname-ui-$_uiver.tar.gz"

  cd "$pkgname-$pkgver"

  # create directory for build output
  mkdir build

  # download go modules
  go mod download

  # create systemd units from template
  cd build
  for unit in worker controller; do
    sed "s/@@TYPE@@/$unit/" "$srcdir/systemd.service" > "$pkgname-$unit.service"
  done
}

build() {
  # boundary-ui
  cd "$pkgname-$pkgver/internal/ui/.tmp/boundary-ui"
  yarn install
  yarn build

  # boundary plugins
  # extracted from ./scripts/build.sh
  cd "$srcdir/$pkgname-$pkgver"
  ORIG_PATH=$(pwd)
  for PLUGIN_TYPE in host; do
    for CURR_PLUGIN in $(ls $ORIG_PATH/plugins/$PLUGIN_TYPE/mains); do
      cd $ORIG_PATH/plugins/$PLUGIN_TYPE/mains/$CURR_PLUGIN
      go build -v \
        -o $ORIG_PATH/plugins/$PLUGIN_TYPE/assets/boundary-plugin-${PLUGIN_TYPE}-${CURR_PLUGIN} \
        .
      cd $ORIG_PATH
    done
    cd $ORIG_PATH/plugins/$PLUGIN_TYPE/assets
    for CURR_PLUGIN in $(ls); do
      gzip -f -9 $CURR_PLUGIN
    done
    cd $ORIG_PATH
  done

  # boundary
  go build -v \
    -buildmode=pie \
    -trimpath \
    -mod=readonly \
    -modcacherw \
    -ldflags "-linkmode external -extldflags ${LDFLAGS} \
    -X github.com/hashicorp/boundary/version.GitCommit=tarball \
    -X github.com/hashicorp/boundary/version.Version=$pkgver" \
    -tags "ui" \
    -o build ./cmd/...
}

package() {
  cd "$pkgname-$pkgver"

  # binary
  install -vDm755 -t "$pkgdir/usr/bin" "build/$pkgname"

  # systemd integration
  install -vDm644 ../tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
  install -vDm644 ../sysusers.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -vDm644 -t "$pkgdir/usr/lib/systemd/system" \
    "build/$pkgname-worker.service" \
    "build/$pkgname-controller.service"

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}
