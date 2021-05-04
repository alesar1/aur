# Maintainer: Dylan Ferris <dylan@psilly.com>
# Maintainer: Michael Lojkovic <mikelojkovic@gmail.com>
# Maintainer: Shatur95 <genaloner@gmail.com>

# The source is about 200 MiB, with an extra ~11 GiB of dependencies downloaded in Setup.sh, and may take several hours to compile.
pkgname=unreal-engine
pkgver=4.26.2
pkgrel=2
pkgdesc='A 3D game engine by Epic Games which can be used non-commercially for free.'
arch=(x86_64)
url=https://www.unrealengine.com/
makedepends=(mono dos2unix git openssh)
depends=(icu sdl2 python lld xdg-user-dirs)
optdepends=('qt5-base: qmake build system for projects'
            'cmake: build system for projects'
            'qtcreator: IDE for projects'
            'codelite: IDE for projects'
            'kdevelop: IDE for projects'
            'clion: IDE for projects'
	    'ccache: cache compilations')
license=(custom:UnrealEngine)
source=(com.unrealengine.UE4Editor.desktop
	clang_11.patch
	PackageWithSystemCompiler.patch
	ccache_executor.patch
	compile_and_regenerate.patch
	processor_multiplier.patch
	BuildConfiguration.xml)
sha256sums=('15e9f9d8dc8bd8513f6a5eca990e2aab21fd38724ad57d213b06a6610a951d58'
            '8042bed3405298b5a4357068dd6b22a5a8a0f19def64b4f61ed0362fb46cb00d'
            '9e403b939a0601c6271da17af9497742cacd74e3cde41562c9f288dfbdcbdbfe'
            '33982486f7fafac35a33dfa37c85cfba8543aa78b5fe13c395d9cccf691ef4b3'
            '7e53beb5818ceadb765689ad8e1baf55ce1d6afe8a9d6884b6f2bd121083c3f7'
            'a129607acc1ea6a48ee5af073da6bd9318176d07e91e743ce93662065f7288dd'
            'ea95603a1021fa5a6f4fce2607696dd803bdfe8584922cb787c6b918f6e6375b')
options=(strip staticlibs) # Package is 3 Gib smaller with "strip" but it takes a long time and generates many warnings

# Set options to anything that is not null to enable them.
_system_compiler=y 	# for the system compiler you'll need to set LINUX_MULTIARCH_ROOT 
		   	# as an environment to /usr/sbin compile projects after building.
			# The system compiler should work for everything in engine now.
_ccache_support=y       # Patches for ccache. More optimizations might be needed.
_system_mono=y # Uses System mono for unreal.
		# must set UE_USE_SYSTEM_MONO
		# in your environment for it to
		# work after install
_processor_multiplier=y  # Allows multiplier on processor count. Allowing the Maximum threads your cpu can handle 

prepare() {
  # Check access to the repository
  if ! git ls-remote git@github.com:EpicGames/UnrealEngine &>-
  then
    error 'You must register at unrealengine.com and link your github account to access this private repo. See the wiki for more info: https://wiki.archlinux.org/index.php/Unreal_Engine_4'
    exit 1
  fi

  # Download Unreal Engine source or update if the folder exists
  if [ ! -d $pkgname ]
  then
    git clone --depth=1 --branch=$pkgver-release git@github.com:EpicGames/UnrealEngine $pkgname
    cd $pkgname
  else
    cd $pkgname
    rm -f .git/index.lock
    git fetch --depth=1 origin tag $pkgver-release
    git reset --hard $pkgver-release
  fi

  if [ -n "$_system_mono" ]
  then
    export UE_USE_SYSTEM_MONO=1
  fi
  generateProjectArgs="-makefile"
  if [ -n "$_system_compiler" ]
  then
    patch -p1 -i "$srcdir/clang_11.patch"
    patch -p9 -i "$srcdir/PackageWithSystemCompiler.patch"
    patch -p6 -i "$srcdir/compile_and_regenerate.patch"
    export LINUX_MULTIARCH_ROOT="/usr/sbin"
    generateProjectArgs+=" -ForceUseSystemCompiler"
  fi
  if [ -n "$_ccache_support" ]
  then
    patch -p1 -i "$srcdir/ccache_executor.patch"
  fi
  if [ -n "$_processor_multiplier" ]
  then
    patch -p1 -i "$srcdir/processor_multiplier.patch"
    mkdir -p "$srcdir/$pkgname/Engine/Saved/UnrealBuildTool"
    mv "$srcdir/BuildConfiguration.xml" "$_"
  fi

  # Qt Creator source code access
  if [ ! -d Engine/Plugins/Developer/QtCreatorSourceCodeAccess ]
  then
    git -C Engine/Plugins/Developer clone --depth=1 git@github.com:fire/QtCreatorSourceCodeAccess
  fi

  export TERM=xterm
  ./Setup.sh
  ./GenerateProjectFiles.sh $generateProjectArgs
}

build() {
  cd $pkgname
  
  # Build all targets from the "all" rule separately, because building multiple targets in parallel results in an error (but building one target with multiple threads is possible)
  ARGS=""
  if [ -n "$_system_compiler" ]
  then
    ARGS="ARGS=-ForceUseSystemCompiler"
  fi
  make $ARGS CrashReportClient-Linux-Shipping
  make $ARGS CrashReportClientEditor-Linux-Shipping
  make $ARGS ShaderCompileWorker
  make $ARGS UnrealLightmass
  make $ARGS UnrealFrontend
  make $ARGS UE4Editor
  make $ARGS UnrealInsights
}

package() {
  # Install dir
  dir="opt/$pkgname"

  # Desktop entry
  if [ "$dir" != "opt/$pkgname" ] # Set new path if dir changed
  then
    sed -i "5c\Path=/$dir/Engine/Binaries/Linux/" com.unrealengine.UE4Editor.desktop
    sed -i "6c\Exec=/$dir/Engine/Binaries/Linux/UE4Editor %F" com.unrealengine.UE4Editor.desktop
  fi
  install -Dm770 com.unrealengine.UE4Editor.desktop $pkgdir/usr/share/applications/com.unrealengine.UE4Editor.desktop
  
  cd $pkgname
  
  # Icon for Desktop entry
  install -Dm770 Engine/Source/Programs/UnrealVS/Resources/Preview.png $pkgdir/usr/share/pixmaps/ue4editor.png

  # License
  install -Dm770 LICENSE.md $pkgdir/usr/share/licenses/UnrealEngine/LICENSE.md
  
  # Engine
  install -dm770 "$pkgdir/$dir/Engine"
  mv Engine/Binaries "$pkgdir/$dir/Engine/Binaries"
  mv Engine/Build "$pkgdir/$dir/Engine/Build"
  mv Engine/Config "$pkgdir/$dir/Engine/Config"
  mv Engine/Content "$pkgdir/$dir/Engine/Content"
  mv Engine/Documentation "$pkgdir/$dir/Engine/Documentation"
  mv Engine/Extras "$pkgdir/$dir/Engine/Extras"
  mv Engine/Plugins "$pkgdir/$dir/Engine/Plugins"
  mv Engine/Programs "$pkgdir/$dir/Engine/Programs"
  mv Engine/Shaders "$pkgdir/$dir/Engine/Shaders"
  mv Engine/Source "$pkgdir/$dir/Engine/Source"
  mv Engine/Saved "$pkgdir/$dir/Engine/Saved"
  
  # Required folders
  # install -d "$pkgdir/$dir/Engine/DerivedDataCache"
  
  # Content
  mv FeaturePacks "$pkgdir/$dir/FeaturePacks"
  mv Samples "$pkgdir/$dir/Samples"
  mv Templates "$pkgdir/$dir/Templates"

  # Build scripts, used by some plugins (CLion)
  install -Dm770 GenerateProjectFiles.sh "$pkgdir/$dir/GenerateProjectFiles.sh"
  install -Dm770 Setup.sh "$pkgdir/$dir/Setup.sh"
  install -Dm770 .ue4dependencies "$pkgdir/$dir/.ue4dependencies"
}
