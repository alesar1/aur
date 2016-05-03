# Maintainer: Dylan Ferris <dylan@psilly.com>

# You must register at unrealengine.com and link your github account to access this private repo.
# For more info, see: https://wiki.archlinux.org/index.php/Unreal_Engine_4

# The source is about 3.8 GiB, with an extra 3.2 GiB of dependencies downloaded in build(), and may take several hours to compile.

pkgname='unreal-engine'
pkgver=4.11.2
pkgrel=2
pkgdesc='A 3D game engine by Epic Games which can be used non-commercially for free.'
arch=('x86_64')
url='https://www.unrealengine.com/'
makedepends=('clang35' 'mono' 'dos2unix' 'cmake')
depends=('icu53' 'xdg-user-dirs')
license=('custom:UnrealEngine')
source=(git+ssh://github.com/EpicGames/UnrealEngine.git#tag=$pkgver-release)
md5sums=(SKIP)
options=(!strip staticlibs)

build() {
  cd $srcdir/UnrealEngine

  ./Setup.sh
  ./GenerateProjectFiles.sh

  make UE4Editor UE4Game UnrealPak CrashReportClient ShaderCompileWorker UnrealLightmass
  make -j1 ShaderCompileWorker
}

package() {
  cd $srcdir/UnrealEngine

  install -Dm644 LICENSE.pdf "$pkgdir/usr/share/licenses/UnrealEngine/LICENSE.pdf"

  install -d "$pkgdir/opt/$pkgname"

  # copy the entire build dir, ~22 GiB
  # @todo only copy what is needed
  cp -r * "$pkgdir/opt/$pkgname/"

  # make the whole thing world writable, otherwise there is a segmentation fault when starting the editor
  # @todo find out what specifically needs to writable
  chmod -R a+w "$pkgdir/opt/$pkgname/"

  install -Dm644 Engine/Content/Editor/Slate/About/UE4Icon.png "$pkgdir/usr/share/pixmaps/UE4Editor.png"
  install -Dm644 "$startdir/UE4Editor.desktop" "$pkgdir/usr/share/applications/UE4Editor.desktop"
}

# vim:set ts=2 sw=2 et:
